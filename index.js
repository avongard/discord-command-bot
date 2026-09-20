const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const config = require('./config.json'); 

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

async function registerCommands() {
    const commands = [
        new SlashCommandBuilder()
            .setName('clear')
            .setDescription('Clears a specified number of messages from the channel.')
            .addIntegerOption(option => 
                option.setName('amount')
                    .setDescription('Number of messages to delete (1-100)')
                    .setRequired(true)
                    .setMinValue(1)
                    .setMaxValue(100))
            .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    ].map(command => command.toJSON());

    const rest = new REST({ version: '10' }).setToken(config.token);

    const TEST_GUILD_ID = 'YOUR-SERVER-ID'; 

    try {
        console.log('Started refreshing local application (/) commands...');
        
        await rest.put(
            Routes.applicationGuildCommands(config.clientId, TEST_GUILD_ID),
            { body: commands },
        );
        
        console.log('Successfully reloaded local application (/) commands.');
    } catch (error) {
        console.error('Failed to register commands:', error);
    }
}

client.once('clientReady', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registerCommands(); 
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName, options, channel } = interaction;

    if (commandName === 'clear') {
        const amount = options.getInteger('amount');

        try {
            await interaction.deferReply({ ephemeral: true });

            const fetchedMessages = await channel.messages.fetch({ limit: amount });
            
            const fourteenDaysAgo = Date.now() - 1209600000;
            const deletableMessages = fetchedMessages.filter(msg => msg.createdTimestamp > fourteenDaysAgo && !msg.pinned);

            if (deletableMessages.size === 0) {
                return await interaction.editReply({
                    content: '❌ No messages could be deleted. They are either pinned or older than 14 days.'
                });
            }

            const deletedMessages = await channel.bulkDelete(deletableMessages, true);

            await interaction.editReply({ 
                content: `🧹 Successfully deleted ${deletedMessages.size} messages!` 
            });
            
        } catch (error) {
            console.error('Error clearing messages:', error);
            await interaction.editReply({ 
                content: 'There was an error trying to process the message clear.' 
            });
        }
    }
});

client.login(config.token);

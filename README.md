# Discord Custom Command Bot

A simple Discord custom command bot built with [discord.js](https://discord.js.org/) v14.

## Features

- Deletes a specified number of messages in a channel.

## Commands

| Command | Description |
|---|---|
| `/clear [1-100]` | Deletes the specified number of messages. |

## Requirements

- [Node.js](https://nodejs.org/) v18 or newer
- [Discord Bot Application](https://discord.com/developers/applications) with a bot token

## Bot Setup

1. Navigate to the [Discord Developer Portal](https://discord.com/developers/home)

2. Create a new application

3. In the Bot tab click Add Bot and check the following boxes:

<img width="1396" height="85" alt="{878F1465-5402-498C-A7AA-25C682C7EFEC}" src="https://github.com/user-attachments/assets/780c9f1b-79d6-46d7-b501-cd16decb605b" />

4. In the OAuth2 tab check the following boxes:

<img width="1106" height="345" alt="{64738E27-564C-4F97-A893-2717EC1A1DD6}" src="https://github.com/user-attachments/assets/2d3dd717-8ea7-4a88-addb-bd098bfd57fc" />

<img width="686" height="431" alt="{E51684BA-9ABD-410F-8F8A-2C7D2BBB9139}" src="https://github.com/user-attachments/assets/37b44b6f-bdda-4bb6-85cb-d804643196d2" />

5. Then copy the URL at the bottom of the page and paste into your browser to invite the bot.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/avongard/discord-music-bot.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `config.json` file in the root directory:
   ```json
   {
     "token": "YOUR-BOT-TOKEN",
     "clientId": "YOUR-APPLICATION-ID"
   }
   ```

## Usage

1. Start the bot:
   ```bash
   node index.js
   ```

2. In any text channel the bot can see, type `!deploy` (as the bot application's owner) to register the slash commands to that server.

3. Once deployed, you can use the commands listed above.

## Running 24/7

To keep the bot online continuously, consider:
- Using [PM2](https://pm2.keymetrics.io/) to manage the process and auto-restart on crash or reboot
- Hosting on a small VPS

## Stack

- [discord.js](https://discord.js.org/) v14

## Notes

- This repo will maintain development.
- If there are any issues, please let me know.
- I hope you enjoy.

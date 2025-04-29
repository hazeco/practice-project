// Import the necessary modules
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the bot is ready, log to the console
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', async (message) => {
  // Check if the message starts with "!giverole"
  if (message.content.startsWith('!giverole')) {
    // Split the message content into an array
    const args = message.content.split(' ');

    // Check if the command is formatted correctly
    if (args.length < 3) {
      message.reply('Usage: !giverole @user RoleName');
      return;
    }

    // Get the mentioned user and the role name
    const mentionedUser = message.mentions.members.first();
    const roleName = args.slice(2).join(' ');

    // Check if a user was mentioned
    if (!mentionedUser) {
      message.reply('User not found!');
      return;
    }

    // Find the role by name
    const role = message.guild.roles.cache.find((role) => role.name === roleName);

    // Check if the role exists
    if (!role) {
      message.reply(`Role "${roleName}" not found!`);
      return;
    }

    // Try to add the role to the user
    try {
      await mentionedUser.roles.add(role);
      message.reply(`Role "${roleName}" has been added to ${mentionedUser.displayName}`);
    } catch (error) {
      console.error('Error giving role:', error);
      message.reply('An error occurred while assigning the role.');
    }
  }
});

// Log in to Discord with your app's token
client.login(process.env.TOKEN);

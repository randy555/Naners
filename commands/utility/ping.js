// Files for inital testing and learning
const  { SlashCommandBuilder } = require('discord.js');

// Export for other files
module.exports = {

    // Defining slash command 
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping test'),
    // Rest of code - Anything else to complete required function
    async execute(interaction) {
        await interaction.reply('pong');
    },
};
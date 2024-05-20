// Files for inital testing and learning
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('This provides information about the server'),
    async execute(interaction) {
        await interaction.reply("The server's name is ${interaction.guild.name} and the current member count is ${interaction.guild.memberCount}.");
    },
};
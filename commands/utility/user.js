// Files for inital testing and learning
const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('This command provides information about the user'),
    async execute(interaction){
        await interaction.reply('Your username is ${interaction.user.username}, and you joined on ${interaction.member.joinedAt}.');
    },

};
// Files for inital testing and learning
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('This command provides information about the user'),
    async execute(interaction){
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined ${interaction.guild.name} on ${interaction.member.joinedAt}.`);
    },

};
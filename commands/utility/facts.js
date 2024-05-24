const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const factsPath = path.join(__dirname, 'facts.json');
const facts = JSON.parse(fs.readFileSync(factsPath, 'utf8'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Provides a random fact about bananas, plantains, pears, or tomatoes.')
        .addStringOption(option => //Options for user
            option.setName('type')
                .setDescription('The type of fact')
                .setRequired(true)
                .addChoices(
                    { name: 'Banana', value: 'banana' },
                    { name: 'Plantain', value: 'plantain' },
                    { name: 'Pear', value: 'pear' },
                    { name: 'Tomato', value: 'tomato' }
                )),
                
    async execute(interaction) {
        const type = interaction.options.getString('type'); 
        const factList = facts[type]; // Get list of facts based on user (type) 

        if (factList) {
            const fact = factList[Math.floor(Math.random() * factList.length)];
            await interaction.reply(fact);
        } else {
            await interaction.reply('Please specify a valid type: banana, plantain, pear, or tomato.');
        }
    },
};
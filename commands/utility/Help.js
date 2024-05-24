const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides information about the bot.')
		.addBooleanOption(option =>
			option.setName('ephemeral')
				.setDescription('Would you like the response to be ephemeral?')
			),

	async execute(interaction) {
		const ephemeral = interaction.options.getBoolean('ephemeral') || false;
		await interaction.reply({content:`Hello! Naners was created by Sir.MilkGobbler.
		Use /ping to test if the bot is alive.
		Use /user to see information about you and your guild!
		Use /fact to recive a random fact based on your choice (Banana, Plantain, Pear, or Tomatos).
		`, ephemeral: ephemeral
		});
	},
};
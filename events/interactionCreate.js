const { Client, Collection, Message, MessageEmbed, Permissions } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isContextMenu()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (command) command.execute(interaction);
        }
        if (!interaction.isCommand()) return;
        const commandName = interaction.commandName;

        const command =
            interaction.client.commands.get(commandName) ||
            interaction.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        try {
            command.execute(Client, interaction);
        } catch (error) {
            console.error(error);
            interaction.reply({ ephemeral: true, content: "There was an error! Contact administrators." }).catch(console.error);
        }

    },
};
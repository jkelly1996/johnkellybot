module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isMessageComponent() || interaction.isButton() || interaction.isSelectMenu()) {
            const handler = client.btnHandlers.get(interaction.message.id);
            if (!handler) return;
            handler(interaction);
        }
    },
};
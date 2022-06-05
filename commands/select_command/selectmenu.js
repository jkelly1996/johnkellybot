const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
    name: "select", // Command Name
    description: "A command with a select menu. How cool", // Command Description
    async execute(Client, interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'Pizza',
                            emoji: '🍕',
                            description: 'A slice of cheese and peperoni',
                            value: 'pizza',
                        },
                        {
                            label: 'Ice Cream',
                            emoji: '🍨',
                            description: 'A scoop of frozen cream',
                            value: 'icecream',
                        },
                    ]),
            );

        const msg = await interaction.reply({ content: "Whats your favorite food?", components: [row], fetchReply: true }).catch(err => { });

        function menuselection(interaction) {
            switch (interaction.values[0]) {
                case "pizza":
                    interaction.reply({ content: "I love pizza too!" });
                    break;
                case "icecream":
                    interaction.reply({ content: "Ice cream is nice on a hot day!" });
                    break;
            }
        }
        interaction.client.addBtnHandler(msg, async (interaction) => {
            if (interaction.message.id === msg.id) {
                menuselection(interaction)
            }
        });
    }
};
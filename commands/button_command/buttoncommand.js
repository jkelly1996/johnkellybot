const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    name: "button", // Command Name
    description: "A command with a BLUE button :o", // Command Description
    async execute(Client, interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("BLUE_BUTTON_WOW")
                    .setLabel("This is a blue button")
                    .setStyle('PRIMARY'),
            );
        const msg = await interaction.reply({ content: "Woah a button!!!! I wonder what happens if you click it?!?!", components: [row], fetchReply: true }).catch(err => { });
        interaction.client.addBtnHandler(msg, async (button) => {
            if (button.customId === "BLUE_BUTTON_WOW") {
                await msg.reply({ content: "Ouch you clicked me" }).catch(err => { });
                await button.deferUpdate()
            }
        });
    }
};
const Discord = require("discord.js");
module.exports = {
    name: 'messageCreate',

    /**
     * @param {Message} message
     * @param {Client} client
     */
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.system) return;
    },
};
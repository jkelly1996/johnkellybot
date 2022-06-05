const discord = require('discord.js')
const { status, statusType } = require("../util/config")
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log("---------------------------------------------------------\nThanks for using ARR4NN's template!\nYou can support me at https://ko-fi.com/ARR4NN\n---------------------------------------------------------")
        console.log(`${client.user.username} ready!`);
        client.user.setActivity(status, { type: statusType });

    },
};
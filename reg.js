var myArgs = process.argv.slice(2);
require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { TOKEN, clientId, guildId } = require('./util/config');
const { readdirSync } = require("fs");
const fs = require('fs');
const chalk = require('chalk');
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
/**
 * Import all commands
 */
const commandFolders = readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        const cmd = {
            name: command.name,
            description: command.description,
            type: command.type,
            options: command.options,
        };
        if (["MESSAGE", "USER"].includes(command.type)) delete command.description;
        console.log(chalk.blue("Loaded command /" + cmd.name));

        commands.push(cmd);
    }
}
const rest = new REST({ version: '9' }).setToken(TOKEN);
(async () => {
    try {
        console.log(chalk.green("Started refreshing application (/) commands."));
        if (myArgs == "--global") {
            console.log("Submitting global commands")
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            );
        } else if (myArgs == "") {
            console.log("Submitting guild commands")
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );
        } else if (myArgs == "--clearguild") {
            console.log("Clearing all guild commands")
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: [] },
            );
        } else if (myArgs == "--clearglobal") {
            console.log("Clearing all global commands. (This can take some time to take effect)")
            await rest.put(
                Routes.applicationCommands(clientId, guildId),
                { body: [] },
            );
        }
        console.log(chalk.green("Successfully reloaded application (/) commands."));
        return process.exit(1);
    } catch (error) {
        console.error(error);
    }
})();
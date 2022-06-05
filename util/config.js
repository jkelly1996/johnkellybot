try {
    config = require("../config.json");
} catch (error) {
    config = null;
}
exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.clientId = config ? config.clientId : process.env.clientId;
exports.guildId = config ? config.guildId : process.env.guildId;
exports.statusType = config ? config.statusType : process.env.statusType;
exports.status = config ? config.status : process.env.status;
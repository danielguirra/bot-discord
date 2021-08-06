const getEmbed = require('./getEmbed')

module.exports = {
    name: "ping",
    category: "info",
    aliases: [],
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute(message, args) {
        message.channel.send(getEmbed.getEmbed(`Latência`, `Ping : **${message.client.ws.ping}**ms`));
    }
}
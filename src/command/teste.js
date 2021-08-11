const getEmbed = require('./getEmbed')
const wait = require('util').promisify(setTimeout)

module.exports = {
    
    name: "ping",
    category: "info",
    aliases: [],
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   async execute(message, args) {
        await wait(10000)
        message.channel.send(getEmbed.getEmbed(`Latência`, `Ping : **${message.client.ws.ping}**ms`));
    }
}
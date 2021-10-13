const getEmbed = require("./getEmbed");
const wait = require("util").promisify(setTimeout);

module.exports = {
  name: "ping",
  description: "Check Ping Bot",
  async execute(message, args) {
    await wait(1000);
    message.channel.send(
      getEmbed.getEmbed(`Latência`, `Ping : **${message.client.ws.ping}**ms`)
    );
  },
};

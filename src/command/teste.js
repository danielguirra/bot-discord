const { getEmbed } = require("../util/getEmbed");
const wait = require("util").promisify(setTimeout);

module.exports = {
  name: "ping",
  description: "Check Ping Bot",
  async execute(message, args) {
    await wait(1000);
    message.channel.send(
      getEmbed(`Latência`, `Ping : **${message.client.ws.ping}**ms`)
    );
  },
};

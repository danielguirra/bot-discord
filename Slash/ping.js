const { getEmbed } = require("../util/getEmbed");
const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("util").promisify(setTimeout);

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("ping server"),
  async execute(interaction) {
    await wait(1000);
    interaction.reply({
      embeds: [
        getEmbed(`Latência`, `Ping : **${interaction.client.ws.ping}**ms`),
      ],
    });
  },
};

const { SlashCommandBuilder } = require("@discordjs/builders");
const { getFromCollection } = require("pensador");
const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pensa")
    .setDescription("Frase de um pensador"),
  async execute(interaction) {
    getFromCollection().then((result) => {
      if (result["message"] === undefined || result["author"] === undefined)
        return interaction.reply("Sem frase hoje");
      interaction.reply({
        embeds: [
          getEmbed(`Frase de ${result["author"]} `, ` ${result["message"]}`),
        ],
      });
    });
  },
};

const { SlashCommandBuilder } = require("@discordjs/builders");
const { getFromAmor } = require("pensador");
const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("love")
    .setDescription("Frase de amor"),
  async execute(interaction) {
    getFromAmor().then((result) => {
      let textoJSON = JSON.stringify(result);
      let frase = JSON.parse(textoJSON);
      gis(frase["author"], logResults);
      async function logResults(err, results) {
        if (err) throw err;
        else {
          return interaction.reply({
            embeds: [
              getEmbed(
                "Frase de amor",
                frase["message"],
                results[0].url,
                frase["author"],
                results[0].url
              ),
            ],
          });
        }
      }
    });
  },
};

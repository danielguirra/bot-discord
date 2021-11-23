const { SlashCommandBuilder } = require("@discordjs/builders");
const { getFromMotivacionais } = require("pensador");
const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("motivacao")
    .setDescription("Frase de motivação"),
  async execute(interaction) {
    getFromMotivacionais().then((result) => {
      let textoJSON = JSON.stringify(result);
      let frase = JSON.parse(textoJSON);
      gis(frase["author"], logResults);
      async function logResults(err, results) {
        if (err) throw err;
        else {
          return interaction.reply({
            embeds: [
              getEmbed(
                `Frase de ${frase["author"]}`,
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

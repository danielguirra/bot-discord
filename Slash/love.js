const { SlashCommandBuilder } = require("@discordjs/builders");
const { getFromAmor } = require("pensador");
const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("amor")
    .setDescription("Frase de amor"),
  async execute(interaction) {
    try {
      getFromAmor().then((result) => {
        if (result["message"] === undefined || result["author"] === undefined) {
          return interaction.reply("Sem frase hoje");
        }

        gis(result["author"], logResults);
        async function logResults(err, results) {
          if (err) throw console.log(err);
          else {
            return interaction.reply({
              embeds: [
                getEmbed(
                  "Frase de amor",
                  result["message"],
                  results[0].url,
                  result["author"],
                  results[0].url
                ),
              ],
            });
          }
        }
      });
    } catch (error) {
      interaction.reply(`Erro ${error}`);
    }
  },
};

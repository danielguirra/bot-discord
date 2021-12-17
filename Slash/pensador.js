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
      console.log(result.author);
      gis(result.author, logResults);
      async function logResults(err, results) {
        if (err) throw err;
        else {
          interaction.reply({
            embeds: [
              getEmbed(
                `Frase de ${result.author}`,
                result.message,
                results[0].url,
                result.author,
                results[0].url
              ),
            ],
          });
        }
      }
    });
  },
};

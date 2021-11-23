const { SlashCommandBuilder } = require("@discordjs/builders");
const gis = require("g-i-s");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("image")
    .setDescription("Procurar no google imagens")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    ),
  async execute(interaction) {
    const string = interaction.options.getString("input");
    gis(string, logResults);
    async function logResults(error, results) {
      if (error) {
        console.log(error);
      } else {
        return await interaction.reply(results[0].url);
      }
    }
  },
};

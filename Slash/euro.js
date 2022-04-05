const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("euro")
    .setDescription("Preço do euro"),
  async execute(interaction) {
    axios.get("https://economia.awesomeapi.com.br/last/EUR-BRL").then((res) => {
      if (res) {
        const euro = res.data["EUR"];
        interaction.reply({
          embeds: [
            getEmbed(
              euro.name,
              `  Até o momento
            *ALTA*:**${euro.high}💶**
            -----------------
            *BAIXA*:**${euro.low}💶**
            -----------------
            *MÉDIA*:**${euro.ask}💶**
      `
            ),
          ],
        });
      }
    });
  },
};

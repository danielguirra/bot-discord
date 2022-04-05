const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("dolar")
    .setDescription("Preço do dolar"),
  async execute(interaction) {
    axios.get("https://economia.awesomeapi.com.br/last/USD-BRL").then((res) => {
      if (res) {
        let dolar = res["data"]["USD"];
        interaction.reply({
          embeds: [
            getEmbed(
              dolar.name,
              `  Até o momento
            *ALTA*:**${dolar.high}💵**
            -----------------
            *BAIXA*:**${dolar.low}💵**
            -----------------
            *MÉDIA*:**${dolar.ask}💵**
      `
            ),
          ],
        });
      }
    });
  },
};

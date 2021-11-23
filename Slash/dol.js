const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("dolar")
    .setDescription("Preço do dolar"),
  async execute(interaction) {
    let res = await axios.get(
      "https://economia.awesomeapi.com.br/last/USD-BRL"
    );
    interaction.reply({
      embeds: [
        getEmbed(
          res["data"]["USDBRL"]["name"],
          `  Até o momento
            *ALTA*:**${res["data"]["USDBRL"]["high"]}**
            -----------------
            *BAIXA*:**${res["data"]["USDBRL"]["low"]}**
            -----------------
            *MÉDIA*:**${res["data"]["USDBRL"]["ask"]}**
      `
        ),
      ],
    });
  },
};

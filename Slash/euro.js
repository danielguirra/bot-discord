const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("euro")
    .setDescription("Preço do euro"),
  async execute(interaction) {
    let res = await axios.get(
      "https://economia.awesomeapi.com.br/last/EUR-BRL"
    );
    interaction.reply({
      embeds: [
        getEmbed(
          res["data"]["EURBRL"]["name"],
          `  Até o momento
            *ALTA*:**${res["data"]["EURBRL"]["high"]}**
            -----------------
            *BAIXA*:**${res["data"]["EURBRL"]["low"]}**
            -----------------
            *MÉDIA*:**${res["data"]["EURBRL"]["ask"]}**
      `
        ),
      ],
    });
  },
};

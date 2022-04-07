const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("significado")
    .setDescription("Procurar o siginificado da palavara")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    ),
  async execute(interaction) {
    let text;
    if (interaction.type === "DEFAULT") {
      text = interaction.content.replace("*significado ", "");
    } else {
      text = interaction.options.getString("input");
    }
    try {
      axios.get(`https://significado.herokuapp.com/${text}`).then((url) => {
        if (url) {
          interaction.reply({
            embeds: [
              getEmbed(
                `Significado de ${text.toUpperCase()}`,
                ` ${url["data"][0]["class"]}
        ${url["data"][0]["meanings"][0]}
        ou
        ${url["data"][0]["meanings"][1]}
        fonte:${`https://significado.herokuapp.com/${text}`}`
              ),
            ],
          });
        } else {
          interaction.reply("Erro foda do ar siginificado");
        }
      });
    } catch (error) {
      interaction.reply("erro siginificado");
    }
  },
};

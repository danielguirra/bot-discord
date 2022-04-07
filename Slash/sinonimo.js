const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sinonimo")
    .setDescription("Procurar o siginificado da palavara")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    ),
  async execute(interaction) {
    let text;
    if (interaction.type === "DEFAULT")
      text = interaction.content.replace("*sinonimo ", "");
    else text = interaction.options.getString("input");
    try {
      let url = await axios.get(
        `https://significado.herokuapp.com/synonyms/${text}`
      );
      interaction.reply({
        embeds: [
          getEmbed(
            `Sinônimos de ${text.toUpperCase()}`,
            ` ${url["data"]}
          
        fonte:${`https://significado.herokuapp.com/synonyms/${text}`}`
          ),
        ],
      });
    } catch (error) {
      interaction.reply("Error sinonimo");
    }
  },
};

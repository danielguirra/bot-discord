const { SlashCommandBuilder } = require("@discordjs/builders");
const translate = require("@vitalets/google-translate-api");
const { getEmbed } = require("../util/getEmbed");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("tra")
    .setDescription("traduz o texto")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    )
    .addStringOption((option) =>
      option.setName("lang").setDescription("Digite a linguagem de saida")
    ),
  async execute(interaction) {
    const string = interaction.options.getString("input");
    const lang = interaction.options.getString("lang");
    translate(`${string}`, { to: `${lang}` }).then((res) => {
      interaction.reply({
        embeds: [
          getEmbed(
            "Traduzi",
            `Isso
            
                        ${string}

                        Ficou assim em ${lang.toUpperCase()}

                        ${res.text}
                
                `
          ),
        ],
      });
    });
  },
};

const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("poke")
    .setDescription("Pokedex do pokemon passado")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite o nome do pokemon")
    ),
  async execute(interaction) {
    let poke = interaction.options.getString("input");
    let res = await axios.get(
      `https://pokemonapi.danielguirra.repl.co/pokemon/${poke}`
    );
    let type = res["data"]["type"][0];
    if (res["data"]["type"][1]) {
      type = type + ` ${res["data"]["type"][1]}`;
    }
    interaction.reply({
      embeds: [
        getEmbed(
          `**${res["data"]["name"]}**`,
          ` Tipo:**${type.toUpperCase()}**
            Porcentagem de genero :
            Machos: ${res["data"]["gender_rate"]["male"]} %
            Femeas: ${res["data"]["gender_rate"]["female"]} %
            Sem Genero:${res["data"]["gender_rate"]["genderless"]}
            Bebe:${res["data"]["baby"]}
            Mitico:${res["data"]["mythical"]}
            Ledário:${res["data"]["legendary"]}

                    |HP :    |${res["data"]["status"]["HP"]}   ❤|
                    |ATK :   |${res["data"]["status"]["ATK"]}  ⚔|
                    |DEF :   |${res["data"]["status"]["DEF"]}  🛡|
                    |S.ATK : |${res["data"]["status"]["SATK"]} 🔥⚔|
                    |S.DEF : |${res["data"]["status"]["SDEF"]} 🔥🛡|
                    |VEL :   |${res["data"]["status"]["SPED"]}  👟|
                    |PESO:   |${res["data"]["status"]["WEIGHT"]}  ⚖|

            ------------------------------------
            Curiosidade
            ${res["data"]["curiosity"]}

            ------------------------------------

            Forma shiny
      `,
          res["data"]["sprite"]["sprite_normal"],
          res["data"]["name"],
          res["data"]["sprite"]["sprite_normal"],
          res["data"]["sprite"]["sprite_shiny"],
          "#f00000"
        ),
      ],
    });
  },
};

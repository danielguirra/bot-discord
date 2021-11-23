const { SlashCommandBuilder } = require("@discordjs/builders");
const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lore")
    .setDescription("Lore do champ")
    .addStringOption((options) =>
      options.setName("champ").setDescription("Um valor")
    ),
  async execute(interaction) {
    let champ = interaction.options.getString("champ");
    let name = require("./util/nameslol.json");
    let roles = require("./util/champRole.json");
    let x = name[champ];

    if (x) {
      champ = x;
    }
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.substr(1);
    };
    champ = champ.capitalize();
    let version = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    let icone = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/champion/${champ}.png`;
    let json = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/data/pt_BR/champion/${champ}.json`;
    let loading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`;
    let splash = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`;

    let response = await axios.get(json);
    let teste = await response["data"];

    let lore = JSON.stringify(teste["data"][`${champ}`]["lore"]);

    let role = JSON.stringify(teste["data"][`${champ}`]["tags"][0]);
    let role2 = JSON.stringify(teste["data"][`${champ}`]["tags"][1]);

    role = role.substring(1);
    role = role.replace(/.$/, "");
    role = roles[role];

    if (role2) {
      //Caso o champ possua uma unica role
      role2 = role2.substring(1);
      role2 = role2.replace(/.$/, "");
      role2 = roles[role2];
    } else {
      role2 = "Unica função";
    }

    let dica = JSON.stringify(teste["data"][`${champ}`]["allytips"]);
    dica = dica.substring(1);
    dica = dica.replace(/.$/, "");

    let title = JSON.stringify(teste["data"][`${champ}`]["title"]);
    title = title.substring(1);
    title = title.replace(/.$/, "");

    let fraqueza = JSON.stringify(teste["data"][`${champ}`]["enemytips"]);
    fraqueza = fraqueza.substring(1);
    fraqueza = fraqueza.replace(/.$/, "");

    interaction.channel.send({
      embeds: [
        getEmbed(
          `****Lore de ${champ} ${title}****`,
          `
        **Se quiser saber as skill's**
        *skill ${champ}
        ---------------
        **Lore**: ${lore}
        ---------------
        **Posição**: **\n${role}\n${role2}**
        ---------------
        **Como Jogar**: ${dica}
        ---------------
        **Como enfrentar** : ${fraqueza}
        
        `,
          icone,
          champ,
          loading,
          splash
        ),
      ],
    });
  },
};

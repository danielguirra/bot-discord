const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "his",
  async execute(message) {
    let champ = message.content.replace("*his ", "").trim();
    let names = require("../util/json/nameslol.json");
    let roles = require("../util/json/champRole.json");
    let x = names[champ]; //Alguns champs possuem nome diferentes foi criado um JSON para isso

    if (x) {
      champ = x;
    }
    champ = champ[0].toUpperCase() + champ.substr(1); //Substitui primeira letra por maiuscula

    let version = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    let icone = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/champion/${champ}.png`;
    let json = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/data/pt_BR/champion/${champ}.json`;
    let loading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`;
    let splash = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`;

    let response = await axios.get(json);
    let teste = response["data"];

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

    message.reply({
      embeds: [
        getEmbed(
          `****Lore de ${champ} ${title}****`,
          `
        **Se quiser saber as skill's**
        *hab ${champ}
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

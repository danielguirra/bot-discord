const fetch = require("node-fetch");
const { getEmbed } = require("./getEmbed");

module.exports = {
  name: "sin",
  discription: "search in the Portuguese dictionary br synonym of the word",
  async execute(message) {
    const text = message.content.replace("*sin ", "");

    let url = `https://significado.herokuapp.com/synonyms/${text}`;
    let response = await fetch(url);
    let json = await response.json();
    const textoJson = JSON.stringify(json);
    const sinonimo = JSON.parse(textoJson);
    message.channel.send(
      getEmbed(
        `Sinônimos de ${text.toUpperCase()}`,
        ` ${sinonimo}

        fonte:${url}`
      )
    );
  },
};

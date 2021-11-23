const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "sin",
  discription: "search in the Portuguese dictionary br synonym of the word",
  async execute(message) {
    const text = message.content.replace("*sin ", "");

    let url = await axios.get(
      `https://significado.herokuapp.com/synonyms/${text}`
    );
    message.channel.send({
      embeds: [
        getEmbed(
          `Sinônimos de ${text.toUpperCase()}`,
          ` ${url["data"]}
          
        fonte:${`https://significado.herokuapp.com/synonyms/${text}`}`
        ),
      ],
    });
  },
};

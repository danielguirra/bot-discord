const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "sig",
  discription: "Portuguese dictionary search br meaning of the word",
  async execute(message) {
    const text = message.content.replace("*sig ", "");
    let url = await axios.get(`https://significado.herokuapp.com/${text}`);
    message.channel.send({
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
  },
};

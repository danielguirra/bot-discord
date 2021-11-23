const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
module.exports = {
  name: "dol",
  description: "Price of Dollar and Euro in Real|BR",
  async execute(message) {
    let moeda = message.content.replace("*dol ", "");
    let url = await axios.get(
      `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,${moeda.toUpperCase()}-BRL`
    );
    let moedas = url["data"];
    console.log(moedas);
    let médiadol = moedas["USDBRL"]["ask"];
    let médiaeur = moedas["EURBRL"]["ask"];
    let médiaselec = moedas[`${moeda.toUpperCase()}BRL`]["ask"];
    message.channel.send({
      embeds: [
        getEmbed(
          `Cotação`,
          `
        💵Dollar em R$: ${médiadol}
        💶Euro  em R$: ${médiaeur}
        💰${moedas[`${moeda.toUpperCase()}BRL`]["name"]}  em R$: ${médiaselec}
        `
        ),
      ],
    });
  },
};

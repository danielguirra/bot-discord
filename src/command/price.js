const { getEmbed } = require("./getEmbed");
const fetch = require("node-fetch");

module.exports = {
  name: "dol",
  description: "Price of Dollar and Euro in Real|BR",
  async execute(message) {
    let moeda = message.content.replace("*dol ", "");
    let url = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,${moeda.toUpperCase()}-BRL`;
    let response = await fetch(url);
    let json = await response.json();
    const textoJson = JSON.stringify(json);
    const moedas = JSON.parse(textoJson);
    let médiadol = moedas["USDBRL"]["ask"];
    let médiaeur = moedas["EURBRL"]["ask"];
    let médiaselec = moedas[`${moeda.toUpperCase()}BRL`]["ask"];
    message.channel.send(
      getEmbed(
        `Cotação`,
        `
        💵Dollar em R$: ${médiadol}
        💶Euro  em R$: ${médiaeur}
        💰${moedas[`${moeda.toUpperCase()}BRL`]["name"]}  em R$: ${médiaselec}
        `
      )
    );
  },
};

const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

async function dolday(dol) {
  let url = await axios.get(
    `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`
  );
  let moedas = url["data"];
  let médiadol = moedas["USD"]["ask"];
  let médiaeur = moedas["EUR"]["ask"];
  dol.send({
    embeds: [
      getEmbed(
        "Dolar e Euro do dia",
        `               💵Dollar em R$: ${médiadol}
                        💶Euro  em R$: ${médiaeur}
             `
      ),
    ],
  });
}
exports.dolday = dolday;

const { getEmbed } = require("../util/getEmbed");
const { getClima } = require("./climateDay");

async function sendClimate(channel) {
  let clima = await getClima();
  channel.send({
    embeds: [
      getEmbed(
        "Clima",
        "Clima de Franca Hoje",
        "",
        "",
        "https://static.escolakids.uol.com.br/conteudo_legenda/4e3d738c244f4c5f3b56f46260402cc4.jpg",
        ""
      ),
    ],
    files: [clima],
  });
}
exports.sendClimate = sendClimate;

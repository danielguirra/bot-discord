const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
const { getFromAmor } = require("pensador");

async function sendLove(loveChannel) {
  try {
    getFromAmor().then((result) => {
      if (result["message"] === undefined || result["author"] === undefined) {
        return loveChannel.send("Sem frase hoje");
      }
      gis(result["author"], logResults);
      async function logResults(err, results) {
        if (err) throw console.log(err);
        else {
          return loveChannel.send({
            embeds: [
              getEmbed(
                "Frase de amor",
                result["message"],
                results[0].url,
                result["author"],
                results[0].url,
                results[0].url,
                "#FF6091"
              ),
            ],
          });
        }
      }
    });
  } catch (error) {
    console.log("Erro send love");
  }
}
exports.sendLove = sendLove;

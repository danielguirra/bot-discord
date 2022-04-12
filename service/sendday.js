const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");
const { getFromCollection } = require("pensador");

function sendday(senddayChannel) {
  try {
    getFromCollection().then((result) => {
      if (!result) return console.log("Erro sendDay");
      gis(result["author"], logResults);
      async function logResults(error, results) {
        if (error) {
          console.log(error);
        } else {
          try {
            return senddayChannel.send({
              embeds: [
                getEmbed(
                  result["author"],
                  result["message"],
                  results[0].url,
                  result["author"],
                  results[0].url,
                  results[0].url,
                  "#61208F"
                ),
              ],
            });
          } catch (error) {
            console.log("Erro \n" + results);
          }
        }
      }
    });
  } catch (error) {
    console.log("Erro send day " + error);
  }
}
exports.sendday = sendday;

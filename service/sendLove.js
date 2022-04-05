const { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");

function sendLove(embed, love) {
  if (embed === "bug") return console.log(embed);
  gis(embed["author"], logResults);
  async function logResults(error, results) {
    if (error) {
      console.log(error);
    } else {
      love.send({
        embeds: [
          getEmbed(
            embed["author"],
            embed["message"],
            results[0].url,
            embed["author"],
            results[0].url
          ),
        ],
      });
    }
  }
}
exports.sendLove = sendLove;

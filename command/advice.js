const translate = require("@vitalets/google-translate-api");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");

module.exports = {
  name: "conselho",
  description: "translate advice for portuguese",
  async execute(message) {
    let url = `https://api.adviceslip.com/advice`;
    let response = await axios.get(url);
    let json = response["data"];
    let text = json["slip"]["advice"];
    translate(`${text}`, { to: `pt` })
      .then((res) => {
        message.reply({
          embeds: [
            getEmbed(
              "Conselho",
              `${res.text}
                      `,
              message.author.avatarURL(),
              message.author.tag
            ),
          ],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

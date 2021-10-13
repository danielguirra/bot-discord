const translate = require("@vitalets/google-translate-api");
const { getEmbed } = require("./getEmbed");
const fetch = require("node-fetch");
module.exports = {
  name: "conselho",
  description: "translate advice for portuguese",
  async execute(message) {
    const member = message.guild.member(message.author);
    let url = `https://api.adviceslip.com/advice`;
    let response = await fetch(url);
    let json = await response.json();
    const textoJson = JSON.stringify(json);
    const significado = JSON.parse(textoJson);
    let text = significado["slip"]["advice"];
    translate(`${text}`, { to: `pt` })
      .then((res) => {
        message.channel.send(
          getEmbed(
            "Conselho",
            `${res.text}
                      `,
            member.user.displayAvatarURL(),
            message.author.tag
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

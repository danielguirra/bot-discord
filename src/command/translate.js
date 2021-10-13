const translate = require("@vitalets/google-translate-api");
const getEmbed = require("./getEmbed");
module.exports = {
  name: "tra",
  description: "translate text for portuguese",
  async execute(message) {
    const member = message.guild.member(message.author);
    let language = message.content.replace(`*tra`, "");
    let languageSearch = language.substr(1, 2);
    let text = message.content.replace(`*tra `, "");
    text = text.substr(3);
    translate(`${text}`, { to: `${languageSearch}` })
      .then((res) => {
        message.channel.send(
          getEmbed.getEmbed(
            "Traduzi",
            `Isso
                     ${text}
                     
                     Ficou assim em *${languageSearch.toUpperCase()}*
                    
                     ${res.text}
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

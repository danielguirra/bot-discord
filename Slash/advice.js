const translate = require("@vitalets/google-translate-api");
const { getEmbed } = require("../util/getEmbed");
const { default: axios } = require("axios");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("conselho")
    .setDescription("Conselho aletório"),
  async execute(interaction) {
    let avatar;
    let nick;
    if (interaction.type === "APPLICATION_COMMAND") {
      avatar = interaction.user.avatarURL();
      nick = interaction.user.tag;
    } else {
      avatar = interaction.author.avatarURL();
      nick = interaction.author.tag;
    }
    let url = `https://api.adviceslip.com/advice`;
    let response = await axios.get(url);
    let json = response["data"];
    let text = json["slip"]["advice"];
    translate(`${text}`, { to: `pt` })
      .then((res) => {
        interaction.channel.send({
          embeds: [
            getEmbed(
              "Conselho",
              `${res.text}
                      `,
              avatar,
              nick
            ),
          ],
        });
        if (interaction.type === "APPLICATION_COMMAND") {
          interaction.reply({ content: "**Conselho usado**", ephemeral: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

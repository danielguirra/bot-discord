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
    let tag;
    if (interaction.type === "DEFAULT") {
      avatar = interaction.author.displayAvatarURL();
      tag = interaction.author.username;
    } else {
      avatar = interaction.user.displayAvatarURL();
      tag = interaction.user.username;
    }
    let url = `https://api.adviceslip.com/advice`;
    let advice;
    advice = await axios.get(url).then(async (response) => {
      let text = response["data"]["slip"]["advice"];
      translate(`${text}`, { to: `pt` })
        .then((res) => {
          try {
            interaction.reply({
              embeds: [getEmbed("Conselho", res.text, avatar, tag)],
            });
          } catch (error) {
            interaction.send({
              embeds: [getEmbed("Conselho", res.text, avatar, tag)],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};

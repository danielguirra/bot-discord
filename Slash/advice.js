const translate = require("@vitalets/google-translate-api");
const getEmbed = require("../util/getEmbed");
const { default: axios } = require("axios");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("conselho")
    .setDescription("Conselho aletório"),
  async execute(interaction) {
    let avatar = interaction.user.displayAvatarURL();
    let url = `https://api.adviceslip.com/advice`;
    let advice;
    teste.return(
      (advice = await axios.get(url).then(async (response) => {
        let text = response["data"]["slip"]["advice"];
        translate(`${text}`, { to: `pt` })
          .then((res) => {
            interaction.reply({
              embeds: [
                getEmbed.getEmbed(
                  "Conselho",
                  `${res.text}`,
                  avatar,
                  interaction.user.tag
                ),
              ],
            });
          })
          .catch((err) => {});
      }))
    );
  },
};

const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
var latestTweets = require("latest-tweets");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("brave")
    .setDescription("ultimo twitter do brave"),
  async execute(interaction) {
    latestTweets("bravefrontiergl", function (err, tweets) {
      return interaction.reply({
        embeds: [
          getEmbed(
            `${tweets[1]["fullname"]}`,
            `${tweets[1]["content"]}`,
            "https://pbs.twimg.com/profile_images/1364475340211384320/XuGJ1E-G_400x400.jpg",
            tweets[1]["fullname"],
            "https://pbs.twimg.com/profile_images/1364475340211384320/XuGJ1E-G_400x400.jpg",
            tweets[1]["image"],
            "#00acee",
            tweets[1]["url"]
          ),
        ],
      });
    });
  },
};

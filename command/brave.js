var latestTweets = require("latest-tweets");
const { getEmbed } = require("../util/getEmbed");
module.exports = {
  name: "brave",
  async execute(message) {
    latestTweets("bravefrontiergl", function (err, tweets) {
      message.reply({
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

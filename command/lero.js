const lerolero = require("lerolero");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "lero",
  execute(message) {
    message.reply({
      embeds: [
        getEmbed(
          "Lero Lero",
          lerolero(),
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK_-Az0lr-qqNiYwQQmqVd4_suO63-BTKFZyL8IqZRjweIJuaPgerkP3FrWssLVZpNPs&usqp=CAU",
          "Ovelha",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK_-Az0lr-qqNiYwQQmqVd4_suO63-BTKFZyL8IqZRjweIJuaPgerkP3FrWssLVZpNPs&usqp=CAU",
          "",
          "#ffffff"
        ),
      ],
    });
  },
};

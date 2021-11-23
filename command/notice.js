const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "aviso",
  aliases: "a",
  discription: "Notice send channel",
  execute(message, args) {
    args = message.content.replace("*aviso", "").trim();
    let avatar = message.author.displayAvatarURL();
    let nickname = message.author.displayName;
    message.delete();
    message.channel.send("@everyone");
    message.channel.send({
      embeds: [getEmbed("Importante", `@everyone ${args}`, avatar, nickname)],
    });
  },
};

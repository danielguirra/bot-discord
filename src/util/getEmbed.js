const { MessageEmbed } = require("discord.js");

const getEmbed = (
  title,
  description,
  authorAvatarURL,
  nickname,
  thumbimage,
  image
) => {
  if (!authorAvatarURL) {
    authorAvatarURL =
      "https://cdn.discordapp.com/avatars/811255307673010246/8f145d7279847a9a6e46efd5ee3df6bf.webp";
  }
  if (!nickname) {
    nickname = "Capivara do TI";
  }
  if (!thumbimage) {
    thumbimage = authorAvatarURL;
  }
  let embed = new MessageEmbed()
    .setColor("#e69e19")
    .setTitle(title)
    .setDescription(description)
    .setFooter(nickname, authorAvatarURL)
    .setThumbnail(thumbimage)
    .setImage(image);

  return embed;
};

module.exports = { getEmbed };

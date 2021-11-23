const { MessageEmbed } = require("discord.js");

const getEmbed = (
  title,
  description,
  authorAvatarURL,
  nickname,
  thumbimage,
  image,
  color,
  url
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
  if (!color) {
    color = "#e69e19";
  }
  let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    .setFooter(nickname, authorAvatarURL)
    .setThumbnail(thumbimage)
    .setImage(image)
    .setURL(url);

  return embed;
};

module.exports = { getEmbed };

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("x1")
    .setDescription("vem x1 seu lixo")
    .addUserOption((option) =>
      option.setName("target").setDescription("cidadão")
    ),
  async execute(interaction) {
    let user;
    if (interaction.type === "DEFAULT") {
      user = interaction.mentions.users.first();
    } else {
      user = interaction.options.getUser("target");
    }
    const canvas = Canvas.createCanvas(429, 429);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/T3cZmz.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 170, 50, 150, 150);

    const attachment = new MessageAttachment(canvas.toBuffer(), "x1.png");

    try {
      interaction.reply({ files: [attachment] });
    } catch (error) {
      console.log(error);
    }
  },
};

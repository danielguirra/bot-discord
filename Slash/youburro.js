const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("youburro")
    .setDescription("youburro")
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
    const canvas = Canvas.createCanvas(400, 400);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/T3cfXF.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 100, 40, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), "you.png");

    try {
      interaction.reply({ files: [attachment] });
    } catch (error) {
      console.log(error);
    }
  },
};

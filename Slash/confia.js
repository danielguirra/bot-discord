const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("confia")
    .setDescription("confia po")
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
    const canvas = Canvas.createCanvas(302, 167);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/08/13/wuwi4.jpg"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 60, 30, 150, 90);

    const attachment = new MessageAttachment(canvas.toBuffer(), "confia.png");

    try {
      interaction.reply({ files: [attachment] });
    } catch (error) {
      console.log(error);
    }
  },
};

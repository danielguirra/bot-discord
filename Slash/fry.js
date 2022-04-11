const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fry")
    .setDescription("fry futurama take my money")
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
    const canvas = Canvas.createCanvas(768, 480);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://ehacks.com.br/wp-content/uploads/167/17-shut-up-and-take-my-money-e1518817154986.jpg"
    );

    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 260, 170, 180, 180);

    const attachment = new MessageAttachment(canvas.toBuffer(), "burgues.png");

    try {
      interaction.reply({ files: [attachment] });
    } catch (error) {
      console.log(error);
    }
  },
};

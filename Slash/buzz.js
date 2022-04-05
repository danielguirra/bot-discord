const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("buzz")
    .setDescription("buzz ele é")
    .addUserOption((option) =>
      option.setName("target").setDescription("cidadão")
    ),
  async execute(interaction) {
    let user;
    let avatar1;
    let avatar2;
    if (interaction.type === "DEFAULT") {
      user = interaction.mentions.users.first();
      avatar1 = await Canvas.loadImage(
        interaction.mentions.users.first().avatarURL({ format: "png" })
      );
      avatar2 = await Canvas.loadImage(
        interaction.author.avatarURL({ format: "png" })
      );
    } else {
      user = interaction.options.getUser("target");
      avatar1 = await Canvas.loadImage(
        user.displayAvatarURL({ format: "png" })
      );
      avatar2 = await Canvas.loadImage(
        interaction.user.displayAvatarURL({ format: "png" })
      );
    }
    const canvas = Canvas.createCanvas(500, 250);
    const context = canvas.getContext("2d");

    const buzz = await Canvas.loadImage("./Slash/util/image/buzz.png");
    context.drawImage(buzz, 250, 0, 250, 255);
    const guei = await Canvas.loadImage("./Slash/util/image/arco.png");
    context.drawImage(guei, 0, 0, 250, 250);
    context.drawImage(avatar1, 90, 130, 66, 66);
    context.drawImage(avatar2, 400, 18, 66, 66);
    const attachment = new MessageAttachment(canvas.toBuffer(), "guei.png");
    try {
      interaction.channel.send(`<@${user.id}>  `);
      interaction.reply({ files: [attachment] });
    } catch (error) {
      interaction.reply({ content: "Falto marcar alguém" });
    }
  },
};

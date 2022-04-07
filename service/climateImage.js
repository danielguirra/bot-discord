/**
 *
 * @returns Clima em imagem desativado por crash em servidor fraco
 */

async function getClima() {
  const Canvas = require("canvas");
  const { MessageAttachment } = require("discord.js");
  const { registerFont } = require("canvas");
  registerFont("./fonts/comic.ttf", { family: "Comic" });
  let url = `https://wttr.in/franca%20brasil.png`;

  const canvas = Canvas.createCanvas(500, 170);
  const context = canvas.getContext("2d");
  const background = await Canvas.loadImage(url);
  context.drawImage(background, 3, 136, 250, 85, 0, 0, 250, 85);
  context.drawImage(background, 254, 136, 250, 85, 250, 0, 250, 85);
  context.drawImage(background, 499, 136, 250, 85, 0, 85, 250, 85);
  context.drawImage(background, 750, 136, 250, 85, 250, 85, 250, 85);
  const clima = new MessageAttachment(canvas.toBuffer(), "clima.png");
  return clima;
}

exports.getClima = getClima;

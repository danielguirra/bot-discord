const Canvas = require('canvas')


global.bot.on("guildMemberAdd", async (member) => {
  console.log(member);
  const canvas = Canvas.createCanvas(700, 250)
  const context = canvas.getContext('2d')
  const background = await Canvas.loadImage('./warwick1.png')
  context.drawImage(background, 0, 0, canvas.width, canvas.height);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  channel.send(`Welcome to the server, ${member}!`, attachment);

  const channel = member.guild.channels.cache.find((channel) =>
    channel.name.includes("bem-vindo")
  );
  const regras = member.guild.channels.cache.find((channel) =>
    channel.name.includes("regras")
  );

  const message = `:wolf:Bem vindo <@${member.id}> ao servidor,\n  
  Por favor verificar nossas ${regras}:wolf:,
    se precisar de ajuda digite 'Ajuda' em qualquer canal`;

  channel.send(message);
  var role = member.guild.roles.cache.find(
    (role) => role.id === "707012360367505480"
  );
  member.roles.add(role);
});

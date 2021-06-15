const dice = async (msg) => {
  let author = await  msg.author.nickname
  const text = msg.content.toLowerCase().trim();
  const rText = text.replace("*d", "").trim();
  if (!isNaN(Number(rText))) {
    if (rText >= 2) {
      var dado = Math.floor(Math.random() * rText);
      dado + 1;
      let embed = new Discord.MessageEmbed()
      .setColor("#6c856f")
      .setTitle(`Seu número é:`)
      .setDescription(dado);
      msg.channel.send(embed)
    } else {let embed = new Discord.MessageEmbed()
      .setColor("#6c856f")
      .setTitle("Digite um valor maior ou igual a 2")
      msg.channel.send(embed)
    }
  }
};

module.exports = { dice };
//Control of the draw dice Controle do dado de sorteio
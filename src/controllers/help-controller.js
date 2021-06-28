const help = (msg) => {
  let member = msg.guild.member(msg.author);
  let role = msg.member.guild.roles.cache.find(
    (role) => role.id === "707000297490481262"
  );
  const cargo = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("cargo")
  );
  const bots = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("bots")
  );
  const channel = msg.member.guild.channels.cache.find(
    (channel) => channel.name.includes("ajuda") //Se possuir canal ajuda
  );
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle(`Meu chamou?`).setDescription(`${member}
      Se quiser saber como pegar seus cargos está aqui: ${cargo},
      Comandos para usar os Bots: ${bots}

      Se nenhuma das opções ajudar entre em contato com um dos ${role} que irão te ajudar!`);
  msg.reply(embed);
  msg.react("🆘");
};

module.exports = { help };

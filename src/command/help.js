const getEmbed = require('./getEmbed')

module.exports = {
  name: 'ajuda',
  description: 'Help controller',
  execute(message, args) {
    let member = message.guild.member(message.author);
    let role = message.member.guild.roles.cache.find(
      (role) => role.id === "707000297490481262"
    );
    let roley = message.member.guild.roles.cache.find(
      (roley) => roley.id === "854333407773196308"
    );
    const cargo = message.member.guild.channels.cache.find((channel) =>
      channel.name.includes("cargo")
    );
    const bots = message.member.guild.channels.cache.find((channel) =>
      channel.name.includes("bots")
    );
    message.reply(getEmbed.getEmbed(`Meu chamou?`,
      `${member}
    Se quiser saber como pegar seus cargos está aqui: ${cargo},
    Comandos para usar os Bots: ${bots}
    Se nenhuma das opções ajudar entre em contato com um dos ${role} ou o ${roley} que irão te ajudar!`));
    message.react("🆘");
  },
}

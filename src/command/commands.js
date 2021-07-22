
const getEmbed = require('./getEmbed')
module.exports = {
  name: 'comandos',
  discription: 'list commands',
  execute(message, args) {

    let member = message.guild.member(message.author);
    message.reply(getEmbed.getEmbed(`Lista Comandos`,
      `${member}
        Comandos para usar o Bot: 
          *d/ Roda um dado com valor que digitar após o d
          *hora/ Mostra o horário do servidor
          *img/ Pesquisa no Google Images 
          *gif/ Pesquisa no Tenor o um gif
          *aviso/ Cria uma caixinha com um aviso
       `));

  }
}
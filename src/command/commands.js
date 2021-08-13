
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
          *tiltado @fulano /Cria uma imagem do gratis tiltado com a 
          foto do @fulano
          *paz @fulano/Cria um ambiente de paz com a foto do 
          @fulano
          *ovo 'texto'/Cria uma imagem com de homem das cavernas
          com o texto inserido 
          *buzz @fulano/Cria uma imagem do ele é do buzz
          *kick @fulano/Expulsa a pessoa marcada se tiver permissão
          *ban @fulano/Bane a pessoa marcada se tiver permissão
       `));

  }
}
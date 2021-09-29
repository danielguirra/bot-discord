
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
          *aviso ou *a / Cria uma caixinha com um aviso
          *tiltado ou *t @fulano /Cria uma imagem do gratis tiltado com a 
          foto do @fulano
          *paz @fulano/Cria um ambiente de paz com a foto do 
          @fulano
          *ovo 'texto'/Cria uma imagem com de homem das cavernas
          com o texto inserido 
          *buzz ou *b @fulano/Cria uma imagem do ele é do buzz
          *kick @fulano/Expulsa a pessoa marcada se tiver permissão
          *ban @fulano/Bane a pessoa marcada se tiver permissão
          *status ou *s/Mostra o status do servidor do bot
          *burgues ou *m @fulano/Mostra o seu nível de burgues
          *confia ou *c @fulano/Confia do mestre WILL
          *you ou y @fulano/Cria um imagem do you cracudo
          *sig 'texto'/Procura o Significado da palavra
          *sin 'texto'/Procura o Sinônimo da palavra
          *clima 'cidade'/Procura o clima da cidade
          *coins/Códigos das moedas mais usadas
          *dol 'código da moeda'/Mostra a Cotação atual do Dolar, Euro e da 
          moeda inserida
          *conselho/Envia um conselho aleatório
          *lol @fulano/mostra histórico do lol
          *duel @fulano/Desafia o fulano para duelo
          *x1/x1 lixo do inhaçu
          *email/Envia um email pelo discord
          *pensador/Envia uma mensagem filosófica
          *poke @pokemon/Pokedex básica do pokemon
          *avatar @fulano/Mostra o Avatar do fulano
          *day @fulano/Grande dia 👍
          *fine @fulano/Mostra o @fulano no It's fine
          *lore @nomedochamp/Mostra a lore do champ
          *skill @nomedochamp/Mostra as skill's do champ
       `));

  }
}
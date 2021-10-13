const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "musgas",
  execute(message) {
    message.channel.send(
      getEmbed(
        "Comandos do DJ CAPIVARA",
        `
        *p + URL do Youtube ou nome da Música
        *fs/ Pula próxima música na fila
        *q/Mostra as música na fila
        *loop/Cola a música em loop
        *skip número/ pula para música selecionada
        *ping/Latência do bot
        *replay/Toca a ultima musica novamente ou enfileira ela
        *paus/Pausa a música
        *resum/Resume a música
        *clear/Limpa a fila
        *s/Pesquisa no Youtube vc escolhe por emote
        *vol/ ajusta o volume `
      )
    );
  },
};

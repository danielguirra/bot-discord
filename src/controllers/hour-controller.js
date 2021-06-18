const { DiscordAPIError } = require("discord.js");
const images = require("../service/images.js");

const currentTime = (msg) => {

  var data = new Date();
  var dia = data.getDate(); // 1-31
  var dia_sem = data.getDay(); // 0-6 (zero=domingo)
  var mes = data.getMonth(); // 0-11 (zero=janeiro)
  var ano2 = data.getYear(); // 2 dígitos
  var ano4 = data.getFullYear(); // 4 dígitos
  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  var mseg = data.getMilliseconds(); // 0-999
  var tz = data.getTimezoneOffset(); // em minutos

  function getNameWeek(x) {
    if (x === 0) {
      return 'Domingo'
    }
    if (x === 1) {
      return 'Segunda-Feira'
    }
    if (x === 2) {
      return 'Terça-Feira'
    }
    if (x === 3) {
      return 'Quarta-Feira'
    }
    if (x === 4) {
      return 'Quinta-Feira'
    }
    if (x === 5) {
      return 'Sexta-Feira'
    }
    if (x === 6) {
      return 'Sábado'
    }
  }
  getNameWeek(dia_sem)

  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + "/" + (mes + 1) + "/" + ano4;
  var str_hora = hora + ":" + min + ":" + seg;

  // Mostra o resultado
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle('Hum no meu relógio são :')
    .setDescription(`Hoje é ${getNameWeek(dia_sem)} são ${str_hora}
    ${str_data}`)
  msg.channel.send(embed);
  msg.react('⌚')
};

module.exports = { currentTime };

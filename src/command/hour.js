
const getEmbed = require("./getEmbed");


module.exports = {
  name: 'hora',
  description: 'hour controller',
  execute(message) {
    var data = new Date();
    var dia = data.getDate(); // 1-31
    var dia_sem = data.getDay(); // 0-6 (zero=domingo)
    var mes = data.getMonth(); // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear(); // 4 dígitos
    var hora = data.getHours(); // 0-23
    var min = data.getMinutes(); // 0-59
    var seg = data.getSeconds(); // 0-59
    const getNameWeek = (x) => {
      return ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"][x]
    }
    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + "/" + (mes + 1) + "/" + ano4;
    var str_hora = hora + ":" + min + ":" + seg;
    message.channel.send(getEmbed.getEmbed("Hum no meu relógio são :",
      `Hoje é ${getNameWeek(dia_sem)}
       dia : ${str_data}
       são : ${str_hora}`))
    message.react("⌚");
  }

};

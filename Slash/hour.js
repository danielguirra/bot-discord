const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hora")
    .setDescription("retorna o horário de Brásilia"),
  async execute(interaction) {
    var { getNameWeek, dia_sem, str_data, str_hora } = hourNow();
    return interaction.reply({
      embeds: [
        getEmbed(
          "Hum no meu relógio são :",
          `Hoje é ${getNameWeek(dia_sem)}
       dia : ${str_data}
       são : ${str_hora}`
        ),
      ],
    });
  },
};
function hourNow() {
  var data = new Date();
  var dia = data.getDate(); // 1-31
  var dia_sem = data.getDay(); // 0-6 (zero=domingo)
  var mes = data.getMonth(); // 0-11 (zero=janeiro)
  var ano4 = data.getFullYear(); // 4 dígitos
  var hora = data.getHours(); // 0-23
  hora = hora - process.env.HORA || hora + 0;
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  const getNameWeek = (x) => {
    return [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ][x];
  };
  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + "/" + (mes + 1) + "/" + ano4;
  var str_hora = hora + ":" + min + ":" + seg;
  return { getNameWeek, dia_sem, str_data, str_hora };
}

exports.hourNow = hourNow;

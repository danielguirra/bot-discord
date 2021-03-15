const currentTime = (message) => {
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

  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + "/" + (mes + 1) + "/" + ano4;
  var str_hora = hora + ":" + min + ":" + seg;

  // Mostra o resultado
  message.reply(
    ":wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:Hoje é " +
      str_data +
      " às " +
      str_hora +
      ":wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:"
  );
};

module.exports = { currentTime };

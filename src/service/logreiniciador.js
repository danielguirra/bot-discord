let getReiniciar = () => {
    let { getEmbed } = require('../command/getEmbed')
    var data = new Date();
    var dia = data.getDate(); // 1-31
    var dia_sem = data.getDay(); // 0-6 (zero=domingo)
    var mes = data.getMonth(); // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear(); // 4 dígitos
    var hora = data.getHours(); // 0-23
    hora = hora - process.env.HORA || hora + 0
    var min = data.getMinutes(); // 0-59
    var seg = data.getSeconds(); // 0-59
    const getNameWeek = (x) => {
        return ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"][x]
    }
    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + "/" + (mes + 1) + "/" + ano4;
    var str_hora = hora + ":" + min + ":" + seg;
    global.bot.channels.fetch('896032845699624971')
        .then(channel => {
            channel.send(getEmbed("***SERVIÇOS**",
                `${getNameWeek(dia_sem)}
           dia : ${str_data}
           são : ${str_hora}`))
        }
        )
}

module.exports = { getReiniciar }

const getEmbed = require("./getEmbed")
const fetch = require('node-fetch');


module.exports = {
    name: 'clima',
    description: 'Climate of the city inserted',
    async execute(message) {
        var strDefault = message.content.replace("*clima ", "")
        var semAcento = strDefault.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let city = semAcento;
        let url = `https://api.hgbrasil.com/weather?key=${process.env.HGTOKEN}&city_name=${city}`
        let response = await fetch(url);
        let json = await response.json();
        const textoJson = JSON.stringify(json)
        const clima = JSON.parse(textoJson)
        const chuva = clima['results']['forecast']

        message.channel.send(getEmbed.getEmbed(`Clima de **${strDefault.toUpperCase()}**`, `
               ☀ Temperatura Agora = °C ${clima['results']['temp']}
                    max : °C ${chuva[0]['max']}
                    min : °C ${chuva[0]['min']}
                ${chuva[0]['description']}
                
                Amanhã ${chuva[1]['weekday']}
                max : °C ${chuva[1]['max']}
                min : °C ${chuva[1]['min']}
                ${chuva[1]['description']}
                `))
    }
}
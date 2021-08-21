
const getEmbed = require("./getEmbed")
const fetch = require('node-fetch');


module.exports = {
    name: 'dol',
    description: 'Price of Dollar and Euro in Real|BR',
    async execute(message) {
        let url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
        let response = await fetch(url);
        let json = await response.json();
        const textoJson = JSON.stringify(json)
        const moedas = JSON.parse(textoJson)
        let médiadol = moedas['USDBRL']['ask']
        let médiaeur = moedas['EURBRL']['ask']

        message.channel.send(getEmbed.getEmbed(`Cotação`, `
        💵Dollar em R$: ${médiadol}
        💶Euro  em R$: ${médiaeur}`))
    }
}
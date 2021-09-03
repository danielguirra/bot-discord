let pensador = require('pensador')
let getEmbed = require('./getEmbed')
const gis = require('g-i-s')

module.exports = {
    name: 'pensador',
    aliases: 'pen',
    async execute(message) {
        pensador.getFromCollection().then(result => {
            const textoJson = JSON.stringify(result)
            const significado = JSON.parse(textoJson)
            gis(significado['author'], logResults);
            async function logResults(error, results) {
                if (error) {
                    console.log(error)
                } else {
                    return message.channel.send(getEmbed.getEmbed(`Frase de ${significado['author']}`
                        , `${significado['message']}`, results[0].url, significado['author']))
                }
            }
            console.log(significado)

        });

    }
}

let getPensador = () => {
    let pensador = require('pensador')
    let gis = require('g-i-s')
    let getEmbed = require('../command/getEmbed')
    const { CronJob } = require('cron');
    const channel = global.bot.channels.cache.find((c) => c.name.includes('Frase do dia'));
    (new CronJob('00 00 11 * * *', (() => {
        pensador.getFromCollection().then(result => {
            const textoJson = JSON.stringify(result)
            const frase = JSON.parse(textoJson)
            gis(frase['author'], logResults);
            async function logResults(error, results) {
                if (error) {
                    console.log(error)
                } else {
                    global.bot.channels.fetch('883409576140107866')
                        .then(channel => {
                            channel.send(getEmbed.getEmbed(`Frase de ${frase['author']}`
                                , `${frase['message']}`, results[0].url, frase['author']))
                        }
                        )
                }
            }
            console.log(frase)

        });
    }))).start();

}

module.exports = { getPensador }
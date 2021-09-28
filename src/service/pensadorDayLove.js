let getPensador = () => {
    let pensador = require('pensador')
    let gis = require('g-i-s')
    let getEmbed = require('../command/getEmbed')
    const { CronJob } = require('cron');
    (new CronJob('50 13 09 * * *', (() => {
        pensador.getFromCollection().then(result => {
            const textoJson = JSON.stringify(result)
            const frase = JSON.parse(textoJson)
            gis(frase['author'], logResults);
            async function logResults(error, results) {
                if (error) {
                    console.log(error)
                } else {
                    global.bot.channels.fetch('892378800527126578')
                        .then(channel => {
                            channel.send(getEmbed.getEmbed(`Frase de Amor`
                                , `${frase['message']}`, results[0].url, frase['author'], results[0].url))
                        }
                        )
                }
            }

        });
    }))).start();

}

module.exports = { getPensador }
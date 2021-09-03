let getPensador = () => {
    let pensador = require('pensador')
    let gis = require('g-i-s')
    let getEmbed = require('../command/getEmbed')
    const { CronJob } = require('cron');
    const channel = global.bot.channels.cache.find((c) => c.name.includes('Frase do dia'));
    (new CronJob('00 00 11 * * *', (() => {
        pensador.getFromCollection().then(result => {
            const textoJson = JSON.stringify(result)
            const significado = JSON.parse(textoJson)
            gis(significado['author'], logResults);
            async function logResults(error, results) {
                if (error) {
                    console.log(error)
                } else {
                    global.bot.channels.fetch('883409576140107866')
                        .then(channel => {
                            channel.send(getEmbed.getEmbed(`Frase de ${significado['author']}`
                                , `${significado['message']}`, results[0].url, significado['author']))
                        }
                        )
                }
            }
            console.log(significado)

        });
    }))).start();

}

module.exports = { getPensador }
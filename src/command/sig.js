const fetch = require('node-fetch');
const getEmbed = require('./getEmbed');

module.exports = {
    name: 'sig',
    discription: 'Portuguese dictionary search br meaning of the word',
    async execute(message) {
        const text = message.content.replace("*sig ", "")

        let url = `https://significado.herokuapp.com/${text}`
        let response = await fetch(url);
        let json = await response.json();
        const textoJson = JSON.stringify(json)
        const significado = JSON.parse(textoJson)
        message.channel.send(getEmbed.getEmbed(`Significado de ${text.toUpperCase()}`, ` ${significado[0]['class']}
        ${significado[0]['meanings'][0]}
        ou
        ${significado[0]['meanings'][1]}
        
        fonte:${url}`))


    }

}

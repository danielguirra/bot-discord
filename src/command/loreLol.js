const fetch = require("node-fetch")
const getEmbed = require("./getEmbed")

module.exports = {
    name: 'lore',
    execute(message) {
        getEmbed.getEmbed()
        let champion = {
            icone = 'http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ahri.png',
            json = 'http://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion/Jax.json',
            loading = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jax_0.jpg'
        }
    }
}
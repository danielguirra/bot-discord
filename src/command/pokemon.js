
module.exports = {
    name: 'poke',
    async execute(message) {
        const Pokemon = require('pokemon.js');
        Pokemon.setLanguage('english');
        const text = message.content.replace("*poke ", "")
        const translate = require('@vitalets/google-translate-api');

        let poke = await Pokemon.getPokemon(`${text}`)
        let type1 = poke['types'][0]['name']
        let type2
        type1 = await tra(type1)
        if (poke['types'][1]) {
            type2 = poke['types'][1]['name']
            type2 = await tra(type2)
            type2 = type2 + '\n------------------------'
        }
        else {
            type2 = '------------------------'
        }
        let name = poke['name']
        let statusHp = poke['stats']['hp']
        let statusAtk = poke['stats']['attack']
        let statusDef = poke['stats']['defense']
        let statusSatk = poke['stats']['special-attack']
        let statusSdef = poke['stats']['special-defense']
        let statusSpe = poke['stats']['speed']
        let curiosidade = poke['pokedex_text_entries'][0]['flavor_text']
        const textoJson = curiosidade.replace('\n', '')
        curiosidade = textoJson.replace('\f', '')
        curiosidade = await tra(curiosidade)
        message.channel.send(getEmbed(`Pokedex do ${name}`, `
            O ${name} é um pokémon do tipo ${type1}
               ${type2}
                Curiosidade:
                ${curiosidade}
                \n------------------------
                Estatística base:
                --------------------------
                |HP :    |${statusHp}   ❤|
                |ATK :   |${statusAtk}  ⚔|
                |DEF :   |${statusDef}  🛡|
                |S.ATK : |${statusSatk} 🔥⚔|
                |S.DEF : |${statusSdef} 🔥🛡|
                |VEL :   |${statusSpe}  👟|
                `, `${poke['sprites']['front_default']}`, `${name}`, `${poke['sprites']['front_default']}
       `, name))

        let tra = async (text) => {
            let resut
            resut = await translate(`${text}`, { to: `pt` }).then(res => {
                return res.text
            })
            return resut
        }

        const getEmbed = (title, description, authorAvatarURL, nickname, pokeimage) => {
            let embed = new Discord.MessageEmbed()
                .setColor("#e69e19")
                .setTitle(title)
                .setDescription(description)
                .setFooter(nickname, authorAvatarURL)
                .setThumbnail(pokeimage)
            return embed;

        }
    }
}
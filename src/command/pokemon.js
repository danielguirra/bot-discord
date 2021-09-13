
module.exports = {
    name: 'poke',
    async execute(message) {
        const pokeType = require('../util/json/poketype.json')
        const Pokemon = require('pokemon.js');
        Pokemon.setLanguage('english');
        const text = message.content.replace("*poke ", "")
        const translate = require('@vitalets/google-translate-api');

        let tra = async (text) => {//Tradutor para português
            let resut
            resut = await translate(`${text}`, { to: `pt` }).then(res => {
                return res.text
            })
            return resut
        }
        let poke = await Pokemon.getPokemon(`${text}`)

        let name = poke['name']

        let type1 = poke['types'][0]['name']
        let type2
        type1 = '\n' + pokeType[type1]
        if (poke['types'][1]) {
            type2 = poke['types'][1]['name']
            type2 = pokeType[type2]
            type2 = '------------------------\n' + type2 + '\n------------------------'
        }
        else {
            type2 = '------------------------'
        }
        let femea
        if (!poke['sprites']['front_female']) {
            femea = '***Sem Sexo***'
        } else {
            femea = '***Fêmea***'
        }

        let statusHp = poke['stats']['hp']
        let statusAtk = poke['stats']['attack']
        let statusDef = poke['stats']['defense']
        let statusSatk = poke['stats']['special-attack']
        let statusSdef = poke['stats']['special-defense']
        let statusSpe = poke['stats']['speed']
        let statusWei = poke['weight']

        let curiosidade = poke['pokedex_text_entries'][0]['flavor_text']
        const textoJson = curiosidade.replace('\n', '')
        curiosidade = textoJson.replace('\f', '')
        curiosidade = await tra(curiosidade)

        let embed = new Discord.MessageEmbed()
            .setColor("#e69e19")
            .setTitle(`Pokedex do ${name}`)
            .setImage(poke['sprites']['front_female'])
            .setDescription(`
                O ${name} é um pokémon do tipo:
                    ${type1}
                     ${type2}
                    Curiosidade:
                    ${curiosidade}
                    \n--------------------------
                    Estatística base:
                    --------------------------
                    |HP :    |${statusHp}   ❤|
                    |ATK :   |${statusAtk}  ⚔|
                    |DEF :   |${statusDef}  🛡|
                    |S.ATK : |${statusSatk} 🔥⚔|
                    |S.DEF : |${statusSdef} 🔥🛡|
                    |VEL :   |${statusSpe}  👟|
                    |PESO:   |${statusWei}  ⚖|
                    --------------------------
                    ${femea}
                    `)
            .setFooter(`${name} como shiny`, `${poke['sprites']['front_shiny']}`)
            .setThumbnail(`${poke['sprites']['front_default']}`)


        message.channel.send(embed);




    }

}
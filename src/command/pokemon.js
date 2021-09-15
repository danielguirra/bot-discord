const translate = require('./translate');

module.exports = {
    name: 'poke',
    async execute(message) {
        const pokeType = require('../util/json/poketype.json')
        const Pokemon = require('pokemon.js');
        Pokemon.setLanguage('english');
        const text = message.content.replace("*poke ", "")

        let poke = await Pokemon.getPokemon(`${text}`)

        let name = poke['name']
        const pokeInfo = async (pokename) => {
            const rq = require("request")
            const url = `https://www.pokemon.com/br/pokedex/${pokename}`
            const jsdom = require("jsdom");
            const { JSDOM } = jsdom;
            rq(url, function (error, response, html) {

                const dom = new JSDOM(html);
                let test = dom.window.document.querySelector("p").textContent;
                console.log(typeof test)

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
                    femea = '***Sem Sexo ou Sem Mudança***'
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



                let Funccuriosidade = async () => {
                    const tra = require('./tra')
                    let curiosidade = test
                    curiosidade = await tra.tra(curiosidade)
                    curiosidade = JSON.stringify(curiosidade)
                    let embed = new Discord.MessageEmbed()
                        .setAuthor(`${name}`, `${poke['sprites']['front_shiny']}`, `https://www.pokemon.com/br/pokedex/${name}`)
                        .setURL(`https://www.pokemon.com/br/pokedex/${name}`)
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
                Funccuriosidade()


            })

        }



        pokeInfo(name)



    }

}
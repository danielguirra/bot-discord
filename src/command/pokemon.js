

module.exports = {
    name: 'poke',
    async execute(message) {
        const { MessageEmbed } = require('discord.js')
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


                    let embedM = new MessageEmbed()
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

                    let embedS = new MessageEmbed()
                        .setAuthor(`${name}`, `${poke['sprites']['front_shiny']}`, `https://www.pokemon.com/br/pokedex/${name}`)
                        .setURL(`https://www.pokemon.com/br/pokedex/${name}`)
                        .setColor("#e69e19")
                        .setTitle(`Pokedex do ${name} como shiny`)
                        .setImage(poke['sprites']['front_shiny'])
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
                    `)
                        .setFooter(`${name} como shiny`, `${poke['sprites']['front_shiny']}`)
                        .setThumbnail(`${poke['sprites']['front_shiny']}`)


                    const messsageEmbed = await message.channel.send(embedM)

                    messsageEmbed.react("🌟")

                    const filter = (reaction, user) =>
                        ["🌟"].includes(reaction.emoji.name) && message.author.id === user.id;
                    const collector = messsageEmbed.createReactionCollector(filter, { time: 60000 });
                    collector.on("collect", async (reaction, user) => {
                        if (user.bot) return;
                        try {
                            if (reaction.emoji.name === "🌟") {
                                {
                                    messsageEmbed.edit(embedS
                                    );
                                }
                            }

                        } catch (error) {
                            console.error(error);
                            return message.channel.send(error.message).catch(console.error);
                        }

                    })


                }
                Funccuriosidade()


            })

        }



        pokeInfo(name)



    }

}
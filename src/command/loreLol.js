const fetch = require("node-fetch")
const getEmbed = require("./getEmbed")

module.exports = {
    name: 'lore',
   async execute(message) {
        let champ = message.content.replace('*lore ', '').trim()
        let names = require('../util/json/nameslol.json')
        let roles = require('../util/json/champRole.json')
        let carai = names[champ]

       if(carai){
           champ = carai
       }
       champ= champ[0].toUpperCase() + champ.substr(1);
        let icone = `http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${champ}.png`
        let json = `http://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion/${champ}.json`
        let loading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`
       
        let response = await fetch(json);
        let teste = await response.json();
        let lore = JSON.stringify(teste['data'][`${champ}`]['lore'])

        let role = JSON.stringify(teste['data'][`${champ}`]['tags'][0])
        let role2 = JSON.stringify(teste['data'][`${champ}`]['tags'][1])

        role = role.substring(1);
        role= role.replace(/.$/, '');
        role = roles[role]
        
       if(role2){
        role2 = role2.substring(1);
        role2= role2.replace(/.$/, '');
        role2 = roles[role2]
       } else{
            role2 = 'Unica função'
        }
       

        let dica = JSON.stringify(teste['data'][`${champ}`]['allytips'])
        dica = dica.substring(1);
        dica= dica.replace(/.$/, '');
        let fraqueza = JSON.stringify(teste['data'][`${champ}`]['enemytips'])
        fraqueza = fraqueza.substring(1);
        fraqueza= fraqueza.replace(/.$/, '');
    
        message.channel.send(getEmbed.getEmbed(`Lore de ${champ}`,`
        **Lore**: ${lore}
        ---------------
        **Posição**: **\n${role}\n${role2}**
        ---------------
        **Como Jogar**: ${dica}
        ---------------
        **Como enfrentar** : ${fraqueza}
        
        `,icone,champ,icone,loading)
        )
    }
}
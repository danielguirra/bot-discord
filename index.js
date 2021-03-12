const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()

bot.login(process.env.BOTTOKEN)
bot.on('ready', () => {
    console.log('Vai')

})

bot.on('message', msg => {
    const text = msg.content.toLowerCase().trim()
    if (msg.content === 'Salve') {
        msg.reply('Auuuuuuuuuuuuuuuuuuuuuu:wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:')
    }
    if (msg.content === 'hora' || msg.content === 'Hora') {
        var data = new Date();
        var dia = data.getDate()           // 1-31
        var dia_sem = data.getDay()            // 0-6 (zero=domingo)
        var mes = data.getMonth()          // 0-11 (zero=janeiro)
        var ano2 = data.getYear()           // 2 dígitos
        var ano4 = data.getFullYear()       // 4 dígitos
        var hora = data.getHours()        // 0-23
        var min = data.getMinutes()        // 0-59
        var seg = data.getSeconds()        // 0-59
        var mseg = data.getMilliseconds()   // 0-999
        var tz = data.getTimezoneOffset() // em minutos

        // Formata a data e a hora (note o mês + 1)
        var str_data = dia + '/' + (mes + 1) + '/' + ano4;
        var str_hora = hora + ':' + min + ':' + seg;

        // Mostra o resultado
        msg.reply(':wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:Hoje é ' + str_data + ' às ' + str_hora + ':wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:')
    }
    if (msg.content === 'Avatar' || msg.content === 'avatar') {
        msg.reply(`O seu avatar é esse::wolf::wolf::wolf::wolf:\n` + msg.author.displayAvatarURL())
    }
    if (msg.content === 'naruto') {
        msg.reply('-p https://www.youtube.com/watch?v=Xc7lUbWEbqY&list=RDXc7lUbWEbqY')
    }
    if (msg.content === 'alok') {
        msg.reply('-p https://open.spotify.com/playlist/37i9dQZF1DWZUWZIwpqsT3#_=_')
    }
    if (msg.content === `Servidor` || msg.content === 'servidor') {
        msg.channel.send(`Nome do Serv: ${msg.guild.name}\nTotal de Animais: ${msg.guild.memberCount}:wolf:`);
    }
    if (msg.content === `usuario`) {
        msg.channel.send(`Seu Nome de Usuário: ${msg.author.username}\nSeu ID: ${msg.author.id}:wolf:`);
    }
    if (text.includes('-cargo')) {
        const rText = text.replace('-cargo', '').trim()
        var rolere = msg.member.guild.roles.cache.find(role => role.id === "707012360367505480")
        if (rText === 'games') {
            var role = msg.member.guild.roles.cache.find(role => role.id === "818235836206153768")
            msg.member.roles.add(role)
            msg.reply(`Seu cargo foi atualizado com liberação de Gamer, boa partida até\n:wolf::wolf:`)
            msg.member.roles.remove(rolere)
        }
        else if (rText === 'dev') {
            var role = msg.member.guild.roles.cache.find(role => role.id === "818235920448487464")
            msg.member.roles.add(role)
            msg.reply(`Seu cargo foi atualizado com liberação de Dev, bom estudo até\n:wolf::wolf:`)
            msg.member.roles.remove(rolere)
        }
        else {
            const informacoes = msg.member.guild.channels.cache.find((channel) => channel.name.includes('informações'))
            msg.reply(`:wolf:Por favor verique se digitou certo o cargo de desejado no ${informacoes}:wolf:`)
        }
    }
    if (msg.content === 'Ajuda' || msg.content === 'ajuda') {
        var role = msg.member.guild.roles.cache.find(role => role.id === "707000297490481262")
        const informacoes = msg.member.guild.channels.cache.find((channel) => channel.name.includes('informações'))
        const bots = msg.member.guild.channels.cache.find((channel) => channel.name.includes('bots'))
        const channel = msg.member.guild.channels.cache.find((channel) => channel.name.includes('ajuda'))
        const message = `<@${msg.member.id}>:wolf:Se quiser saber como utilizar ganhar cargos está aqui: ${informacoes},\n
                         Agora se quiser saber como utiliziar os Bots está aqui: ${bots}\n
                         Se nenhuma das opções ajudar entre em contato com um dos ${role} que irão te ajudar :wolf::wolf:`
        channel.send((message))
    }

})

bot.on('guildMemberAdd', (member) => {

    console.log(member)


    const channel = member.guild.channels.cache.find((channel) => channel.name.includes('bem-vindo'))
    const regras = member.guild.channels.cache.find((channel) => channel.name.includes('regras'))


    const message = `:wolf:Bem vindo <@${member.id}> ao servidor,\n  Por favor verificar nossas ${regras}:wolf:,
    se precisar de ajuda digite 'Ajuda' em qualquer canal`

    channel.send(message)
    var role = member.guild.roles.cache.find(role => role.id === "707012360367505480")
    member.roles.add(role)

})


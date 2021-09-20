const nodemailer = require('nodemailer');
let password = process.env.PASS;
let getEmbed = require('./getEmbed')
module.exports = {
    name: 'email',
    execute(message) {
        console.log(password)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, //Change this to your gmail email
                pass: process.env.PASS //Your password
            }
        });
        let filter = m => m.author.id === message.author.id
        message.channel.send(getEmbed.getEmbed(`**EMAIL**`, `Para quem é o email?`)).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            })
                .then(message => {
                    message = message.first()
                    let emailenviar = message.content
                    message.channel.send(getEmbed.getEmbed(`**EMAIL**`, `Qual é o texto ?`)).then(() => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 30000,
                            errors: ['time']
                        })
                            .then(message => {
                                message = message.first()
                                let emailtexto = message.content
                                let send = () => {
                                    var mailOptions = {
                                        from: `${emailenviar}`,
                                        to: `${emailenviar}`,
                                        subject: 'Email via Discord',
                                        text: `${emailtexto}`
                                    };

                                    transporter.sendMail(mailOptions, function (error, info) {
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log('Email Sent!');
                                            message.channel.send(getEmbed.getEmbed(`Email enviado`, `Para o ${emailenviar}
                                            Assunto
                                            
                                            ${emailtexto}`))
                                        }
                                    })
                                }
                                send()
                            })
                            .catch(collected => {
                                message.channel.send('Demora');
                            });
                    })
                })
                .catch(collected => {
                    message.channel.send('Demora');
                });
        })

    }
}
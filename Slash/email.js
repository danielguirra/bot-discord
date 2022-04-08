const nodemailer = require("nodemailer");
let { getEmbed } = require("../util/getEmbed");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("email")
    .setDescription("envia um email")
    .addStringOption((option) =>
      option.setName("email").setDescription("verifique").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("text").setDescription("verifique").setRequired(true)
    ),
  async execute(interaction) {
    let email;

    let text;
    if (interaction.type === "DEFAULT") {
      email = process.env.EMAILDEVOLPER;
      text = interaction.content.replace("*email ", "");
    } else {
      email = interaction.options.getString("email");
      text = interaction.options.getString("text");
    }
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if (regex.test(email)) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL, //Change this to your gmail email
          pass: process.env.PASS, //Your password
        },
      });
      var mailOptions = {
        from: `${email}`,
        to: `${email}`,
        subject: "Email via Discord",
        text: `${text}`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          interaction.reply("Email enviado para :" + email);
          return interaction.channel.send(
            getEmbed(
              `**Email enviado**`,
              `Para o ${emailenviar}
                             Assunto
                                            
                                            ${emailtexto}`
            )
          );
        }
      });
    } else {
      return interaction.reply(email + " não é válido");
    }
  },
};

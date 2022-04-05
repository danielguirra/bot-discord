// const { getEmbed } = require("../util/getEmbed");

// module.exports = {
//   name: "d",
//   discription: "Dice controller",
//   execute(message, args) {
//     if (!isNaN(Number(args))) {
//       if (args >= 2) {
//         let member = message.guild.member(message.author);
//         var dado = Math.floor(Math.random() * args);
//         dado + 1;
//         message.reply({
//           embeds: [getEmbed(`SORTEANDOOO`, `${member} seu número é : ${dado}`)],
//         });
//         message.react("🤞");
//       } else {
//         message.reply({
//           embeds: [getEmbed(`ERRO`, `Digite um valor maior ou igual a 2`)],
//         });
//         message.react("❌");
//       }
//     }
//   },
// };
// //Control of the draw dice Controle do dado de sorteio

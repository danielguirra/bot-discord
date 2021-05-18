const dice = (msg) => {
  const text = msg.content.toLowerCase().trim();
  const rText = text.replace("*d", "").trim();
  if (!isNaN(Number(rText))) {
    if (rText >= 2) {
      var dado = Math.floor(Math.random() * rText);
      dado + 1;
      msg.reply("Seu número foi: " + dado);
    } else {
      msg.reply("Digite um valor maior ou igual a 2 !");
    }
  }
};

module.exports = { dice };
//Control of the draw dice Controle do dado de sorteio
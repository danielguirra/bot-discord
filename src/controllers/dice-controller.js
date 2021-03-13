const dice = (msg) => {
  const text = msg.content.toLowerCase().trim();
  const rText = text.replace("*d", "").trim();
  if (!isNaN(Number(rText))) {
    var dado = Math.floor(Math.random() * rText);
    dado + 1;
    msg.reply("Seu número foi: " + dado);
  } else {
    msg.reply("Digite o tamanho correto do dado!");
  }
};

module.exports = { dice };

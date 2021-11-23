const { getFromAmor } = require("pensador");
let getPensadorLove = async () => {
  let amor = getFromAmor().then((result) => {
    const textoJson = JSON.stringify(result);
    const frase = JSON.parse(textoJson);
    let amor = {
      message: frase["message"],
      author: frase["author"],
    };
    return amor;
  });
  return amor;
};

module.exports = { getPensadorLove };

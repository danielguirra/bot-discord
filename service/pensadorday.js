const { getFromCollection } = require("pensador");
let colecao = async () => {
  let amor = getFromCollection().then((result) => {
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

module.exports = { colecao };

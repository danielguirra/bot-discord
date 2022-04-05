const { getFromCollection } = require("pensador");
let colecao;
getFromCollection().then((result) => {
  if (result["message"] === undefined || result["author"] === undefined) {
    colecao = "bug";
    return;
  }
  colecao = result;
});

module.exports = { colecao };

const { KingJamesVersiculo } = require("bible-pt");

let bibleCompleta = async () => {
  let retornos = await KingJamesVersiculo("salmos", 23, 1);
  console.log(retornos);
  return retornos;
};
bibleCompleta();

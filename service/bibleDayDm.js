const { CapituloDoDiaKingJames } = require("bible-pt");
const users = require('../usersDm.json')
CapituloDoDiaKingJames().then((f) => {
  console.log(f);
});

const { default: axios } = require("axios");
const fs = require("fs");
const names = require("../util/json/namesBible.json");
const num = Math.floor(Math.random() * 65);
const livro = names[num].id;

async function pegacapitulos() {
  const capitulos = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}`
  );
  const numc = Math.floor(Math.random() * capitulos.data.capitulos.length);
  const name = capitulos.data.livro;
  const capdia = {
    url: `https://bible.danielguirra.repl.co/kja/${livro}/${numc + 1}`,
    data: `${name} capitulo:${numc + 1}`,
  };
  return capdia;
}
let teste = pegacapitulos().then((res) => {
  console.log(res);
});

// async function salvanomes() {
//   const names = await axios.get("https://bible.danielguirra.repl.co/kja/nomes");

//   console.log(typeof names.data);
//   const t = fs.writeFile(
//     "../util/json/namesBible.json",
//     JSON.stringify(names.data),
//     "utf-8",
//     (f) => {
//       console.log(f);
//     }
//   );
// }
// salvanomes();

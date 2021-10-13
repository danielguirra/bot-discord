require("dotenv").config();
require("./src/index");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Servidor online!"));

app.listen(process.env.PORT || port, () =>
  console.log(`O bot está rodando na porta: http://localhost:${port}`)
);

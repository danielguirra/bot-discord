require("dotenv").config();
require("./index");
const express = require("express");
const app = express();
const port = 20;
app.get("/", (req, res) => res.send("Servidor online!"));

app.listen(process.env.PORT || port, () =>
  console.log(`O bot está rodando na porta: http://localhost:${port}`)
);

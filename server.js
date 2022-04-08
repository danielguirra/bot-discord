require("dotenv").config();
require("./index");
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => res.send("Servidor online!"));

app.listen(process.env.PORT || port, () =>
  console.log(`O bot está rodando na porta: http://localhost:${port}`)
);

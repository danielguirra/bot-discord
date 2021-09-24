require("dotenv").config();
require("./src/index");
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Servidor online!'));

app.listen(() => console.log(`O bot está rodando na porta: http://localhost:${port}`));
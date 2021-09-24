require("dotenv").config();
require("./src/index");
const express = require('express');
const app = express();
const port = 0;
app.get('/', (req, res) => res.send('Servidor online!'));

app.listen(port, () => console.log(`O bot está rodando na porta: http://localhost:${port}`));
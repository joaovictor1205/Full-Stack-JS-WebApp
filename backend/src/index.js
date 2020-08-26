const express = require('express');
require('dotenv/config');

const server = express();

server.get('/', (req, res) => {
    res.send('FUCK YOU');
})

server.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`)
});

const express = require('express');
require('dotenv/config');

const server = express();
server.use(express.json());

// ROUTER
const taskRouter = require('./routes/TaskRouter');
server.use('/task', taskRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`)
});

const express = require('express');
const cors = require('cors');
require('dotenv/config');

const server = express();
server.use(express.json());
server.use(cors());

// ROUTER
const taskRouter = require('./routes/TaskRouter');
server.use('/task', taskRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`)
});

const TaskModel = require('../models/TaskModel');

const TaskMiddleware = async(req, res, next) => {
  
    const { macAddress, type, title, description, when } = req.body;

    if (!macAddress){
        return res.status(400).json({ error: 'macAddress é obrigatório!' });
    } else if (!type){
        return res.status(400).json({ error: 'tipo é obrigatório!' });
    } else if (!title){
        return res.status(400).json({ error: 'title é obrigatório!' });
    } else if (!description){
        return res.status(400).json({ error: 'descrição é obrigatório!' });
    } else if (!when){
        return res.status(400).json({ error: 'data e hora são obrigatórios!' });
    } else {
        next();
    }

};

module.exports = TaskMiddleware;
const TaskModel = require('../models/TaskModel');

class TaskController {
    async create(req,res){
        const task = new TaskModel(req.body);

        await task
                .save()
                .then( response => {
                    res.status(200).json(response);
                })
                .catch( err => {
                    return res.status(500).json(err);
                });
    }
}

module.exports = new TaskController();

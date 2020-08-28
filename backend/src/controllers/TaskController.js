const TaskModel = require('../models/TaskModel');
const { response } = require('express');

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

    async update(req, res){
        await TaskModel.findOneAndUpdate({ '_id': req.params.id }, req.body, { new: true })
        .then( response => {
            return res.status(200).json(response);
        })
        .catch( error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res){
        await TaskModel.find({ 'macAddress': { '$in': req.body.macAddress } })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
}

module.exports = new TaskController();

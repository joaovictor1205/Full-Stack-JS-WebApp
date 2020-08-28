const TaskModel = require('../models/TaskModel');

const current_date = new Date();
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } = require('date-fns');

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

    async show(req, res){
        await TaskModel.findById(req.params.id)
            .then(response => {
                if(response){
                    return res.status(200).json(response);
                }
                else{
                    return res.status(404).json({ error: 'Tarefa não encontrada!' });
                }
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async delete(req, res){
        await TaskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.error(500).json(error);
            });
    }

    async done(req, res){
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true},
        )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async late(req, res){
        await TaskModel.find({
            'when': {'$lt': current_date},
            'macAddress': {'$in': req.body.macAddress},
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async today(req, res){
        await TaskModel.find({
            'when': {'$gte': startOfDay(current_date), '$lte': endOfDay(current_date)},
            'macAddress': {'$in': req.body.macAddress},  
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async week(req, res){
        await TaskModel.find({
            'when': {'$gte': startOfWeek(current_date), '$lte': endOfWeek(current_date)},
            'macAddress': {'$in': req.body.macAddress},  
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async month(req, res){
        await TaskModel.find({
            'when': {'$gte': startOfMonth(current_date), '$lte': endOfMonth(current_date)},
            'macAddress': {'$in': req.body.macAddress},  
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}

module.exports = new TaskController();

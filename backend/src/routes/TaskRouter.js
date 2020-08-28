const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const TaskMiddleware = require('../middlewares/TaskMiddleware');
const MacAdressMiddleware = require('../middlewares/MacAdressMiddleware');

router.post('/', TaskMiddleware, TaskController.create);
router.put('/:id', TaskMiddleware, TaskController.update);
router.get('/filter/all', MacAdressMiddleware,TaskController.all);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

module.exports = router;

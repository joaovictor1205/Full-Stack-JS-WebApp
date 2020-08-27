const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const TaskMiddleware = require('../middlewares/TaskMiddleware');

router.post('/', TaskMiddleware, TaskController.create);
router.put('/:id', TaskMiddleware, TaskController.update);

module.exports = router;

const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const TaskMiddleware = require('../middlewares/TaskMiddleware');

router.post('/', TaskMiddleware, TaskController.create);

module.exports = router;

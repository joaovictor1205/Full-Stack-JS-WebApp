const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const TaskMiddleware = require('../middlewares/TaskMiddleware');

router.post('/', TaskMiddleware, TaskController.create);
router.put('/:id', TaskMiddleware, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macAddress',TaskController.all);
router.get('/filter/date/:macAddress', TaskController.late);
router.get('/filter/today/:macAddress', TaskController.today);
router.get('/filter/week/:macAddress', TaskController.week);
router.get('/filter/month/:macAddress', TaskController.month);
router.get('/filter/year/:macAddress', TaskController.year);

module.exports = router;

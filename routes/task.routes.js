const router = require('express').Router();
const {getAllTaskController,addTaskController,updateTaskController,deleteTaskController} = require('../controllers/task.controller')


router.get('/tasks',getAllTaskController);
router.post('/tasks',addTaskController);
router.put('/tasks/:id',updateTaskController);
router.delete('/tasks/:id',deleteTaskController);

module.exports = router;



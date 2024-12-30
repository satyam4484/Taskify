const {getAllTask,addTask,updateTask,deleteTask} = require('../repositories/task.repository');


const getAllTaskController = async (req,res)=>{
    try{
        const tasks = await getAllTask();
        if(!tasks.isFetch){
            throw new Error('Unable to fetch the tasks');
        }
        res.status(200).send({tasks:tasks.data});
    }catch(error) {
        console.log("ERROR: Error in getting all Tasks...",error);
        res.status(400).send({Message:'Something went Wrong'});
    }
}

const addTaskController = async(req,res) => {
    try{
        const data = req.body;
        const newTask = await addTask(data);
        if(!newTask.isAdd){
            throw new Error('Unable to add the task');
        }
        res.status(201).send({Message:'Task Added Successfully',task:newTask.data});
    }catch(error){
        console.log("ERROR: Error in adding task...",error);
        res.status(400).send({Message:'Something went Wrong'});
    }
}

const updateTaskController = async(req,res) => {
    try{
        const taskid = req.params.id;
        const data = req.body;
        const updatedTask = await updateTask(taskid,data);
        if(!updatedTask.isUpdate){
            throw new Error('Unable to update the task');
        }
        res.status(201).send({Message:'Task Updated Successfully',task:updatedTask.data});
    }catch(error){
        console.log("ERROR: Error in updating task...",error);
        res.status(400).send({Message:'Something went Wrong'});
    }
}

const deleteTaskController = async(req,res) => {
    try{
        const taskId = req.params.id;
        const deletedTask = await deleteTask(taskId);
        if(!deletedTask.isDelete){
            throw new Error('Unable to delete the task');
        }
        res.status(200).send({Message:'Task Deleted Successfully'});
    }catch(error){
        console.log("ERROR: Error in deleting task...",error);
        res.status(400).send({Message:'Something went Wrong'});
    }
}

module.exports = {
    getAllTaskController,
    addTaskController,
    updateTaskController,
    deleteTaskController
}
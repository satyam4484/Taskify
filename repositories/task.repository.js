const Task = require('../models/task.model');


const getAllTask = async () => {
    try{
        const tasks = await Task.find();
        return {isFetch: true, data:tasks};
    }catch(error) {
        console.log("ERROR: Error in getting all the task.....",error);
        return {isFetch: false,date: null};
    }
};



const addTask = async(data) => {
    try{
        const newTask = await Task.create(data);
        return {isAdd: true, data: newTask};
    }catch(error){
        console.log("ERROR: Error in adding task...",error);
        return {isAdd: false};
    }
}

const updateTask = async(taskid,data) => {
    try{
        const updatedTask = await Task.findByIdAndUpdate(taskid,data,{new: true});
        return {isUpdate: true, data: updatedTask};
    }catch(error){
        console.log("ERROR: Error in updating task...",error);
        return {isUpdate: false};
    }
}

const deleteTask = async(taskId) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(taskId);
        return {isDelete: true};
    }catch(error) {
        console.log("ERROR: Error in deleting task...",error);
        return {isDelete: false};
    }
}



module.exports = {
    getAllTask,
    addTask,
    updateTask,
    deleteTask
}
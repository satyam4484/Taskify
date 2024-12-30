const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    status:{
        type: String,
        enum:['pending','in-progress','completed'],
        default:'pending'
    },
    priority:{
        type: String,
        enum:['low','medium','high'],
        default:'low'
    },
    dueDate:{
        type: Date
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
});


const Task = model('Task',taskSchema);

module.exports = Task;
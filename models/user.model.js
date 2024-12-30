const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    userType:{
        type: String,
        enum:['admin','user']
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unqiue: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const User = model('User',userSchema);


module.exports = User;
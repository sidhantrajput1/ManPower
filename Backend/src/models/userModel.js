
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : { type : String, required : true, minlength : 3},
    email : { type : String, required : true, trim : true, unique : true, lowercase : true},
    phoneNumber : {type : Number, required : true},
    password : {type : String, required : true},
    role : {enum : ['student', 'recruiter'], type : String, required : true},
    profile : { 
        bio : {type : String},
        skilss : [{type : String}],
        resume : {type : String},
        resumeOriginalName : {type : String},
        company : { type : mongoose.Schema.Types.ObjectId, ref : 'Company'},
        profilePhoto : {type : String, default : ""}
    }
},{timestamps : true})

const User = mongoose.model('User', userSchema);

module.exports = User;
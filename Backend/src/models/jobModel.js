const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    requirement : [ {type : String} ],
    salary : {type : String, required : true},
    location : {type : String, required : true},
    experienceLevel : {type : Number, required : true},
    jobTypes : {type : String, required : true},
    postion : {type : String, required : true},
    company : {type : mongoose.Schema.Types.ObjectId, required : true, ref : 'Company'},
    created_by : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    application : [
        {type : mongoose.Schema.Types.ObjectId, ref : 'Application'}
    ]
}, {timestamps : true})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
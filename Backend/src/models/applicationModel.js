
const mongoose = require('mongoose');

const applicationSchem = new mongoose.Schema({
    job : {type : mongoose.Schema.Types.ObjectId, ref : 'Job', required : true},
    applicant : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    status : {enum : ['pending', 'accepted', 'rejected'], default : 'pending', type : String},
}, {timestamps : true})

const Application = mongoose.model('Application', applicationSchem);

module.exports = Application;
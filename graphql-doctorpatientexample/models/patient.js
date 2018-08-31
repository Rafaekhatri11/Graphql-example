const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const patients = new Schema({
    id:String,
    Name: String,
    Address: String,
    Contact:  Number,
    Gender : String,
    doctorid: String
})


module.exports = mongoose.model('Patient',patients)
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Appointment =  new Schema({
    patient_name: String,
    doctor_name: String,
    date : String,
    time: String
})


module.exports = mongoose.model('appointment',Appointment);
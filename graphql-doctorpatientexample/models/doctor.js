const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctors = new Schema({
    id: String,
    name: String,
    phone: String,
    Speciality : String
})


module.exports= mongoose.model('Doctor',doctors)
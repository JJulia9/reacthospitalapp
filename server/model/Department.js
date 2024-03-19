const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: String,
    details: String,
    doctor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
    doctor_img: String,
    nurse: String,
    nurse_img: String,
    map: String,
    phone: String,

});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
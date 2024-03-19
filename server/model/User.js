const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    forename: String,
    surname: String,
    department: String,
    guardian: String,
    quardian_name: String,
    notes: String,
    dob: Date,
    appointment_date: Date,
    appointment_notes: String,
    photo: String,
    department_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
    doctor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},


});

const User = mongoose.model('User', userSchema);

module.exports = User;
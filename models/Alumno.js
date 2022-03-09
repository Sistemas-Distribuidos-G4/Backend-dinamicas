const mongoose = require('mongoose');


const AlumnoSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: [Number],
        required: true
    },
 
    status: {
        type: Boolean,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
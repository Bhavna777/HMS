const mongoose = require('mongoose')
const validator = require('validator');


const psychiatristSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter psychiatrist name'],
        maxlength: [20, 'Psychiatrist name can not exceed 20 characters']
    },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('Psychiatrist', psychiatristSchema);
const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter hospital name'],
        trim: true,
        maxlength: [100, 'Hospital name can not exceed 100 characters']
    },
    psychiatrists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist' }],
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Hospital', hospitalSchema);
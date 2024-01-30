const mongoose = require('mongoose')
const validator = require('validator');


const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter patient name'],
        maxlength: [20, 'Patient name can not exceed 20 characters']
    },
    address: {
        type: String,
        required: [true, 'Please enter address'],
        minlength: [10, 'Address should have at least 10 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: value => /^\+\d{1,}[0-9]{9,}$/.test(value),
            message: 'Invalid phone number',
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: value =>
                validator.isStrongPassword(value, {
                    minLength: 8,
                    maxLength: 15,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                }),
            message:
                'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.',
        },
        select: false,
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
    psychiatrist: {type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist'},
    createdAt: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('Patient', patientSchema);
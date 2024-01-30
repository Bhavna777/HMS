
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Hospital = require('../models/hospital.js')


exports.newHospital = catchAsyncErrors(async (req, res) => {
    const { name } = req.body;

    const hospital = await Hospital.create({
        name
    })

    res.status(201).json({
        success: true,
        hospital
    })
})


exports.getHospitals = catchAsyncErrors(async (req, res) => {
    const hospitals = await Hospital.find()

    res.status(200).json({
        success: true,
        hospitals
    })
})

exports.getSingleHospital = catchAsyncErrors(async (req, res) => {
    const hospital = await Hospital.findById(req.params.id).populate({
        path : 'psychiatrists',
        select : 'name patients'
    });

    const psychiatristDetails = hospital.psychiatrists.map(psychiatrist => {
        const patientsCount = psychiatrist.patients.length;

        return {
            id: psychiatrist._id,
            name: psychiatrist.name,
            patientsCount,
        };
    });

    res.status(200).json({
        success: true,
        name: hospital.name,
        totalPatients: hospital.patients.length,
        totalPsychiatrists: hospital.psychiatrists.length,
        psychiatristDetails
    })
})
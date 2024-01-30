
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const cloudinary = require("cloudinary");
const Patient = require('../models/patients');
const Hospital = require('../models/hospital');
const Psychiatrist = require('../models/psychiatrist');



exports.newPatient = catchAsyncErrors(async (req, res) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.files.image.tempFilePath, {
        folder: "patients",
        width: 150,
        crop: "scale",
    });

    const { name, address, email, phoneNumber, password, hospitalId, psychiatristId } = req.body;


    try {

        let hospital;
        let psychiatrist;

        if (hospitalId) {
            hospital = await Hospital.findById(hospitalId);

            if (!hospital) {
                return res.status(404).json({
                    success: false,
                    message: 'Hospital not found',
                });
            }
        }

        if (psychiatristId) {
            psychiatrist = await Psychiatrist.findById(psychiatristId);

            if (!hospital) {
                return res.status(404).json({
                    success: false,
                    message: 'Psychiatrist not found',
                });
            }
        }

        const patient = await Patient.create({
            name,
            address,
            email,
            phoneNumber,
            password,
            hospital: hospitalId, 
            psychiatrist: psychiatristId,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        });

        if (hospital) {
            hospital.patients.push(patient._id);
            await hospital.save();
        }

        if (psychiatrist) {
            psychiatrist.patients.push(patient._id);
            await psychiatrist.save();
        }

        res.status(201).json({
            success: true,
            patient
        });
    } catch (error) {
        console.error('Error creating patient:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});

exports.getPatients = catchAsyncErrors(async (req, res) => {
    const patients = await Patient.find();

    res.status(200).json({
        success: true,
        patients
    })
})

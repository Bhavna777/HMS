
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Psychiatrist = require('../models/psychiatrist.js')
const Hospital = require('../models/hospital');


exports.newPsychiatrist = catchAsyncErrors(async (req, res) => {
    const { name, hospitalId } = req.body;
    try {

        let hospital;

        if (hospitalId) {
            hospital = await Hospital.findById(hospitalId);

            if (!hospital) {
                return res.status(404).json({
                    success: false,
                    message: 'Hospital not found',
                });
            }
        }

        const psychiatrist = await Psychiatrist.create({
            name,
            hospital: hospitalId,
        })

        if (hospital) {
            hospital.psychiatrists.push(psychiatrist._id);
            await hospital.save();
        }

        res.status(201).json({
            success: true,
            psychiatrist
        });
    } catch (error) {
        console.error('Error creating psychiatrist:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
})


exports.getPsychiatrists = catchAsyncErrors(async (req, res) => {
    const psychiatrists = await Psychiatrist.find()

    res.status(200).json({
        success: true,
        psychiatrists
    })
})

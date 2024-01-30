const express = require('express')
const router = express.Router()

const {getPatients, newPatient} = require('../controllers/patientControllers.js')

router.route('/patients').get(getPatients);
router.route('/patient/new').post(newPatient);


module.exports = router;
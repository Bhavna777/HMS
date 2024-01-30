const express = require('express')
const router = express.Router()

const {getHospitals, newHospital, getSingleHospital} = require('../controllers/hospitalControllers.js')

router.route('/hospitals').get(getHospitals);
router.route('/hospital/new').post(newHospital);
router.route('/hospital/:id').get(getSingleHospital);


module.exports = router;
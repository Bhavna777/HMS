const express = require('express')
const router = express.Router()

const {getPsychiatrists, newPsychiatrist} = require('../controllers/psychiatristControllers.js')

router.route('/psychiatrists').get(getPsychiatrists);
router.route('/psychiatrist/new').post(newPsychiatrist);


module.exports = router;
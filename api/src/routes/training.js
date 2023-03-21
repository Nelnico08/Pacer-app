const { Router } = require('express')
const { getTraining } = require('../controllers/training.controller')

const router = Router();

router.use('/', getTraining)

module.exports = router;
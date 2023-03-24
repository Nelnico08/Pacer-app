const { Router } = require('express')
const { getTraining, postTraining } = require('../controllers/training.controller')
const { verifyToken } = require("../middleware/authentication")

const router = Router();

router.get('/', [verifyToken], getTraining)
router.post('/', [verifyToken], postTraining)

module.exports = router;
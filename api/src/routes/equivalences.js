const { Router } = require('express')
const { getEquivalences, postEquivalences } = require('../controllers/equivalences.controller')
const { verifyToken } = require("../middleware/authentication")

const router = Router();

router.get('/', [verifyToken], getEquivalences)
router.post('/', [verifyToken], postEquivalences)

module.exports = router;
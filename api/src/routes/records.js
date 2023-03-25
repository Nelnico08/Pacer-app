const { Router } = require("express")
const { getRecords, postRecords } = require("../controllers/records.controllers")
const { verifyToken } = require("../middleware/authentication")

const router = Router()

router.get('/', [verifyToken], getRecords)
router.post('/', [verifyToken], postRecords)

module.exports = router
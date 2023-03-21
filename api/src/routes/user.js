const { Router } = require('express')
const { getUser } = require('../controllers/user.controller')

const router = Router();

router.use('/', getUser)

module.exports = router;
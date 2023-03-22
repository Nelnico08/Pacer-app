const { Router } = require('express')
const { getUser, register, login } = require('../controllers/user.controller')

const router = Router();

router.get('/', getUser)
router.post('/register', register)
router.post('/login', login)

module.exports = router;
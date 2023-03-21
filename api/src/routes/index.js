const { Router } = require('express')
const user = require('./user')
const equivalences = require('./equivalences')
const training = require('./training')

const router = Router()

router.use('/user', user)
router.use('/equivalences', equivalences)
router.use('/training', training)

module.exports = router;
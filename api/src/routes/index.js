const { Router } = require('express')
const user = require('./user')
const equivalences = require('./equivalences')
const training = require('./training')
const records = require('./records')

const router = Router()

router.use('/user', user)
router.use('/equivalences', equivalences)
router.use('/training', training)
router.use('/records', records)

module.exports = router;
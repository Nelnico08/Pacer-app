const { Router } = require('express')
const { getEquivalences } = require('../controllers/equivalences.controller')

const router = Router();

router.use('/', getEquivalences)

module.exports = router;
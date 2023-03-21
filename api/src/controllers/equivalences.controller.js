const { User, Equivalences} = require('../db')

const getEquivalences = async(req, res, next) => {
    try {
        res.json({route: 'equivalences'})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEquivalences
}
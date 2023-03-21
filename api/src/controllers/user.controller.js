const { User, Equivalences, Training } = require('../db')

const getUser = async(req, res, next) => {
    try {
        res.json({route: 'user'})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUser
}
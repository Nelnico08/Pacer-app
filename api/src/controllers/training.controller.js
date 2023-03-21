const { User, Training } = require('../db')

const getTraining = async(req, res, next) => {
    try {
        res.json({route: 'training'})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTraining
}
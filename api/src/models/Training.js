const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('training',{
        easy: {
            type: DataTypes.STRING(11)
        },
        aerobic: {
            type: DataTypes.STRING(11)
        },
        superaerobic: {
            type: DataTypes.STRING(11)
        },
        vo2max: {
            type: DataTypes.STRING(11)
        },
        intervals: {
            type: DataTypes.STRING(11)
        }
    })
}
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('training',{
        easy: {
            type: DataTypes.STRING(8)
        },
        aerobic: {
            type: DataTypes.STRING(8)
        },
        superaerobic: {
            type: DataTypes.STRING(8)
        },
        vo2max: {
            type: DataTypes.STRING(8)
        },
        intervals: {
            type: DataTypes.STRING(8)
        }
    })
}
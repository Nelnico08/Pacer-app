const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('record',{
        oneK: {
            type: DataTypes.STRING
        },
        oneMile: {
            type: DataTypes.STRING
        },
        threeK: {
            type: DataTypes.STRING
        },
        fiveK: {
            type: DataTypes.STRING
        },
        tenK: {
            type: DataTypes.STRING
        },
        fifteenK: {
            type: DataTypes.STRING
        },
        halfMarathon: {
            type: DataTypes.STRING
        },
        twentyFiveK: {
            type: DataTypes.STRING
        },
        thirtyK: {
            type: DataTypes.STRING
        },
        thirtyFiveK: {
            type: DataTypes.STRING
        },
        marathon: {
            type: DataTypes.STRING
        }
    })
}
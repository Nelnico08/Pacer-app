const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('equivalences',{
        oneK: {
            type: DataTypes.STRING
        },
        twoK: {
            type: DataTypes.STRING
        },
        threeK: {
            type: DataTypes.STRING
        },
        fourK: {
            type: DataTypes.STRING
        },
        fiveK: {
            type: DataTypes.STRING
        },
        sixK: {
            type: DataTypes.STRING
        },
        sevenK: {
            type: DataTypes.STRING
        },
        eightK: {
            type: DataTypes.STRING
        },
        nineK: {
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
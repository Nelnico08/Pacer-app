const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('equivalences',{
        equivalences: {
            type: DataTypes.ARRAY(DataTypes.STRING(8))
        }
    })
}
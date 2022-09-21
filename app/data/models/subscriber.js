const { DataTypes } = require('sequelize')

const subscriber = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowFalse: null,
    primaryKey: true
  },
  email: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  createdAt: DataTypes.DATE
}

module.exports = subscriber

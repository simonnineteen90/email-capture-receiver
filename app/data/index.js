const dbConfig = require('./config')
const Sequelize = require('sequelize')
// import models
const subscriber = require('./models/subscriber')
const db = {}

// define sequelize object
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

const init = async () => {
  // define all models
  sequelize.define('Subscriber', subscriber)

  // sync data
  sequelize.sync()
}

db.sequelize = sequelize
db.init = init

module.exports = db

const { receiveMessage, stopReceive } = require('./receive-message')
const db = require('./data/index')
const subscriber = require('./data/models/subscriber')

process.on('SIGTERM', async () => {
  await stopReceive()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await stopReceive()
  process.exit(0)
})

module.exports = (async () => {
  console.log('test')

  try {
    await db.authenticate()
    console.log('Connection established')
    console.log('Attempting db.define')
    db.define('Subscriber', subscriber)
    console.log('Attempting db.sync')
    db.sync()
  } catch (err) {
    console.error('Something went wrong!', err)
  }
  await receiveMessage()
})()

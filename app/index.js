const { receiveMessage, stopReceive } = require('./receive-message')
const db = require('./data/index')

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
    db.init()
  } catch (err) {
    console.error('Something went wrong!', err)
  }
  await receiveMessage()
})()

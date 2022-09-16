const { receiveMessage, stopReceive } = require('./receive-message')

process.on('SIGTERM', async () => {
  await stopReceive()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await stopReceive()
  process.exit(0)
})

module.exports = (async () => {
  receiveMessage()
})()

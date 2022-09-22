const db = require('./data/index')

const saveNewSubscriber = async (message) => {
  const transaction = await db.sequelize.transaction()
  try {
    await db.subscriber.create({
      email: message.body.email,
      firstName: message.body.firstName,
      lastName: message.body.lastName,
      createdAt: new Date()
    }, { transaction })

    transaction.commit()
    console.log('New subscriber saved')
  } catch (err) {
    console.error(err)
    transaction.rollback()
  }
}

module.exports = saveNewSubscriber

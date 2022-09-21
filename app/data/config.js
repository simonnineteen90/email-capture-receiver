const retry = {
  backoffBase: 500,
  backoffExponent: 1.1,
  match: [/SequelizeConnectionError/],
  max: 10,
  name: 'connection',
  timeout: 60000
}

const config = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  dialect: 'postgres',
  host: 'host.docker.internal',
  // thought this should have been the postgres container name
  retry
}

module.exports = config

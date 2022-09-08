require('dotenv').config();

module.exports = {
  development: {
    client: 'oracledb',
    connection: {
      host: '172.16.0.16',
      database: 'trn',
      user: process.env.USER,
      password: process.env.PSW
    }
  }
};
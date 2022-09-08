const knex = require('knex');
const config = require('../../knexconfig');

const connection = knex(config.development);

module.exports = connection;
const route = require('express').Router();

const hello = require('../controllers/HelloController');
const sysdate = require('../controllers/DbController');
const id = require('../controllers/IdController');

route.get('/', hello.index);
route.get('/sysdate', sysdate.getSysdate);
route.post('/id', id.prestador);

module.exports = route;
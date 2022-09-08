const db = require('../database/DbConnection');

module.exports = {
  async getSysdate(req, res) {
    const data = await db.raw(`SELECT SYSDATE FROM DUAL`);

    res.json(JSON.stringify(data));
  }
}
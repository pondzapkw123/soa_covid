var express = require('express');
var router = express.Router();
const db = require('../db/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await db.getAllCountry();
  const confirmed = await db.getAllConfirmed();
  const recovered = await db.getAllRecovered();
  const death = await db.getAllDeath();

  let objectCountry = [];
  for (const key in result.rows) {
    objectCountry[key] = {
      state: result.rows[key].state,
      country: result.rows[key].country,
      confirmed: confirmed.rows[key].confirmed,
      recovered: recovered.rows[key].confirmed,
      death: death.rows[key].confirmed,
    }
  }
  res.render('index', { countrys: objectCountry});
});

router.get('/map', async function(req, res, next) {
  res.render('map');
  
});

module.exports = router;

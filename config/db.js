const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'campaign',
});

module.exports = { db };

// host: 'localhost',
// user: 'root',
// password: '',
// database: 'campaign',

// host: '192.169.176.117',
// user: 'adminchr_campaign',
// password: ')_GF0.[I7@3b',
// database: 'campaign',

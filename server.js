const express = require('express');
const path = require('path');
const { db } = require('./config/db');

const app = express();

app.use(express.static(path.join('client/build')));

app.get('/api/:id', async (req, res, next) => {
  db.query(
    `SELECT * from ryco WHERE id = '${req.params.id}';`,
    (err, rows, fields) => {
      res.status(200).json(rows);
    }
  );
});

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
  db.connect((err) => {
    if (err) return console.log(err);
    console.log('Database connected successfully..');
  });
});

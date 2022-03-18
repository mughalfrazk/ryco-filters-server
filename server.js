const express = require('express');
const path = require('path');
const pdf = require('html-pdf');
const { db } = require('./config/db');

const html = `<b>hello world</b>`;
const app = express();

app.use(express.static(path.join('client/build')));

// Find by ID api
app.get('/api/:id', async (req, res, next) => {
  db.query(
    `SELECT * from ryco WHERE id = '${req.params.id}';`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        throw err;
      }
      // const options = {
      //   format: 'Letter',
      // };

      // pdf.create(html, options).toFile('./pdfname.pdf', (err, res) => {
      //   if (err) {
      //     console.log(err);
      //   }
      // });

      res.status(200).json({ user: rows[0] });
    }
  );
});

// Serving HTML
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

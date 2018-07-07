require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const roomsRoutes = require('./Rooms');
const path = require ('path');
const app = express();

app.use(bodyParser.json());


app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.use('/room', roomsRoutes);

// app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/loaderio-63665cdaefea36eff6fd881c3053d1cd/', (req, res) => {
  res.send('loaderio-63665cdaefea36eff6fd881c3053d1cd');
});
app.get('loaderio-63665cdaefea36eff6fd881c3053d1cd.html', (req, res) => {
  res.send('loaderio-63665cdaefea36eff6fd881c3053d1cd');
});
app.get('loaderio-63665cdaefea36eff6fd881c3053d1cd.txt', (req, res) => {
  res.send('loaderio-63665cdaefea36eff6fd881c3053d1cd');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE'
    );
    return res.status(200).json({});
  }
  next();
});


const port = 8081;
app.listen(port, () => console.log(`listening on port ${port}`));

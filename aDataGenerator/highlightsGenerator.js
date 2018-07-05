const pg = require('pg');
const key = require('../config.js');
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const connectionString = key.connect;
const db = new pg.Client(connectionString);
const generate = () => {
  const titleType = [`It's Alright..`, `Kind of Clean`, `It's like a Motel 6`];
  const ipsum = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras',
  ];
  const TF = [true, false];
  const randGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
  }
  const sentenceMake = (n) => {
    let sentence = "";
    for (let i = 0; i < n; i++) {
      sentence += (ipsum[i]+ " ");
    }
    return sentence;
  }
  let hlight = [];
  let j = 1;
  for (let i = 1; i <= 5000000; i++) {
    let hwrite1 = `${i},${j},${titleType[0]},${sentenceMake(10)}`;
    j++;
    hlight.push(hwrite1);
    if (hlight.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/hTable.csv`), hlight.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/hTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      hlight = [];
    }
    if (i % 500000 === 0) {
      console.log("-30%",i);
    }
  }
  let k = 1;
  for (let i = 5000001; i <= 10000000; i++) {
    let hwrite2 = `${i},${k},${titleType[1]},${sentenceMake(10)}`;
    k++;
    hlight.push(hwrite2);
    if (hlight.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/hTable.csv`), hlight.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/hTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      hlight = [];
    }
    if (i % 500000 === 0) {
      console.log("30%+",i);
    }
  }
  let l = 1;
  for (let i = 10000001; i <= 15000000; i++) {
    let hwrite3 = `${i},${l},${titleType[2]},${sentenceMake(10)}`;
    l++;
    hlight.push(hwrite3);
    if (hlight.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/hTable.csv`), hlight.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/hTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      hlight = [];
    }
    if (i % 500000 === 0) {
      console.log("60%+",i);
    }
  }
}
console.time("Start");
generate();
console.timeEnd("Start");
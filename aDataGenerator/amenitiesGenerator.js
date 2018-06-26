const pg = require('pg');
const key = require('../config.js');
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const connectionString = key.connect;
const houseType = [
  'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE LOFT',
  'CAMPER', 'EARTH HOUSE', 'DOME HOUSE', 'TREE HOUSE', 'ENTIRE CABIN', 'ENTIRE HOUSE',
  'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT',
];
const amenitiesSections = ['Family features', 'Dining', 'Facilities', 'Guess access', 'Logistics', 'Bed and bath',
'Safety features', 'Outdoor'];
const optionalDescription = [`Minor concerns..`, `Something I noticed`, `Hmm.`, `It's alright`];
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
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//0 - 7 amenitiesSections title
//someitem word
//ipsum description
const sentenceMake = (n) => {
  // const paragraph = ipsum.join(" ");
  let sentence = "";
  for (let i = 0; i < n; i++) {
    sentence += (ipsum[i]+ " ");
  }
  return sentence;
}
let amenChunk = [];
let j = 1;
const generate = () => {
  for (let i = 1; i <= 10000000; i++) {
    let title = amenitiesSections[randGen(0,7)];
    let item = "someItem";
    let description = sentenceMake(20);
    let amenwrite = `${i},${j},${title},${item},${description}`;
    j++;
    amenChunk.push(amenwrite);
    if (amenChunk.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/amenitiesTableCass.csv`), amenChunk.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      amenChunk = [];
      fs.appendFileSync(path.join(__dirname, `../heavySink/amenitiesTableCass.csv`), ('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (i%500000 === 0) {
      console.log(i);
    }
  }
  let k = 1;
  for (let i = 10000001; i <= 20000000; i++) {
    let title = amenitiesSections[randGen(0,7)];
    let item = "someItem";
    let description = sentenceMake(20);
    let amenwrite = `${i},${k},${title},${item},${description}`;
    k++;
    amenChunk.push(amenwrite);
    if (amenChunk.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/amenitiesTableCass.csv`), amenChunk.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      amenChunk = [];
      fs.appendFileSync(path.join(__dirname, `../heavySink/amenitiesTableCass.csv`), ('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (i%500000 === 0) {
      console.log(i);
    }
  }
}
console.time("Start");
generate();
console.timeEnd("Start");
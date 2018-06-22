const pg = require('pg');
const key = require('../config.js');
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const connectionString = key.connect;
const db = new pg.Client(connectionString);
// db.connect();
const houseType = [
  'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE LOFT',
  'CAMPER', 'EARTH HOUSE', 'DOME HOUSE', 'TREE HOUSE', 'ENTIRE CABIN', 'ENTIRE HOUSE',
  'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT',
];
const titleType = [`It's Alright..`, `Kind of Clean`, `It's like a Motel 6`];
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
const sentenceMake = (n) => {
  // const paragraph = ipsum.join(" ");
  let sentence = "";
  for (let i = 0; i < n; i++) {
    sentence += (ipsum[i]+ " ");
  }
  return sentence;
}
// id 
// startDate string
// endDate string
// nightOfMinStay num

const generate = () => {
  let output = [];
  let count = 0;
  for (var i = 0; i < 10000000; i++) {
    for (let j = 0; j < randGen(0, 3); j += 1) {
      let startDate = new Date(2018, 7 + count, randGen(1, 15));
      let endDate = new Date(2018, 7 + count + 1, randGen(16, 30));
      let nightsOfMinimumStay = randGen(4, 6);
      output.push(startDate);
      output.push(endDate);
      output.push(nightsOfMinimumStay);
      count += 1;
      count += randGen(1, 2);
    }
    count = 0;
    // return output;
    if (output.length === 10000) {
      console.log("entered");
      fs.appendFileSync(path.join(__dirname, `../heavySink/nightsMinTable`), output.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      output = [];
    }
    if (i % 1000000 === 0) {
      console.log(i);
    }
  }
};

console.time("Start");
generate();
console.timeEnd("Start");
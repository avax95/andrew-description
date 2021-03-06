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

let main = [];
const generate = () => {
  for (let i = 1; i <= 10000000; i++) {
    let owner = faker.name.firstName();
    let ownerPicture_Url = "some url";
    let propertyType = houseType[randGen(0,15)];
    let title = ipsum[randGen(3, 10)];
    let score = randGen(50,100);
    let location = faker.address.city();
    let numberOfGuest = randGen(1,5);
    let numberOfRooms = randGen(1,3);
    let numberOfBeds = randGen(1,3);
    let numberOfBaths = randGen(1,3);
    let numberOfViews = randGen(5, 400);
    let descriptionSummary = sentenceMake(20);
    let smoking = TF[randGen(0,1)];
    let petSuitable = TF[randGen(0,1)];
    let partiesOrEvents = TF[randGen(0,1)];
    let noSafeForChildrenUnder = randGen(1,10);
    let checkInStartTime = randGen(7,5);
    let checkInEndTime = randGen(12, 5);
    let checkOutTime = randGen(12,5);
    let selfCheckInWithLockBox = TF[randGen(0,1)];
    let rules = sentenceMake(150);
    let rulestoAcknowledge = sentenceMake(30);
    let cancellationType = randGen(1,5);
    let cancellationSummary = sentenceMake(40);
    let nightsOfStayVary = TF[randGen(0,1)];
    let nightsOfMinimumStay = randGen(2,4);
    let daysFromLastUpdate = randGen(1,20);
    let write = `${i},${owner},${ownerPicture_Url},${propertyType},${title},${score},${location},${numberOfGuest},${numberOfRooms},${numberOfBeds},${numberOfBaths},${numberOfViews},${descriptionSummary},${smoking},${petSuitable},${partiesOrEvents},${noSafeForChildrenUnder},${checkInStartTime},${checkInEndTime},${checkOutTime},${selfCheckInWithLockBox},${rules},${rulestoAcknowledge},${cancellationType},${cancellationSummary},${nightsOfStayVary},${nightsOfMinimumStay},${daysFromLastUpdate}`;
    main.push(write);
    if (main.length === 10000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/mainTableCass.csv`), main.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/mainTableCass.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      main = [];
    }
    if (i % 50000 === 0) {
      console.log(i);
    }
  }
}
console.time("start");
generate();
console.timeEnd("start");
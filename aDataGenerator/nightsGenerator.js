const fs = require('fs');
const path = require('path');

const randGen = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const generate = () => {
  let output = [];
  for (var i = 0; i <= 10000000; i++) {
    let startDate = new Date(2018, 7, randGen(1, 15));
    let endDate = new Date(2018, 7 + 1, randGen(16, 30));
    let nightsOfMinimumStay = randGen(4, 6);
    let nightwrite = `${i},${startDate},${endDate},${nightsOfMinimumStay}`;
    output.push(nightwrite);
    if (output.length === 10000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/nightsMinTable.csv`), output.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/nightsMinTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      output = [];
    }
    if (i % 1000000 === 0) {
      console.log("i",i);
    }
  }
  for (var i = 0; i <= 10000000; i++) {
    let startDate = new Date(2018, 7 + 1, randGen(1, 15));
    let endDate = new Date(2018, 7 + 2, randGen(16, 30));
    let nightsOfMinimumStay = randGen(4, 6);
    let nightwrite = `${i},${startDate},${endDate},${nightsOfMinimumStay}`;
    output.push(nightwrite);
    if (output.length === 10000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/nightsMinTable.csv`), output.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/nightsMinTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      output = [];
    }
    if (i % 1000000 === 0) {
      console.log("j",i);
    }
  }
  for (var i = 0; i <= 10000000; i++) {
    let startDate = new Date(2018, 7 + 2, randGen(1, 15));
    let endDate = new Date(2018, 7 + 3, randGen(16, 30));
    let nightsOfMinimumStay = randGen(4, 6);
    let nightwrite = `${i},${startDate},${endDate},${nightsOfMinimumStay}`;
    output.push(nightwrite);
    if (output.length === 10000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/nightsMinTable.csv`), output.join('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
      fs.appendFileSync(path.join(__dirname, '../heavySink/nightsMinTable.csv'), '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      output = [];
    }
    if (i % 1000000 === 0) {
      console.log("k",i);
    }
  }
};

console.time("Start");
generate();
console.timeEnd("Start");
const fs = require('fs');
const path = require('path');

const generate = () => {
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
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const sentenceMake = (n) => {
    let sentence = "";
    for (let i = 0; i < n; i++) {
      sentence += (ipsum[i]+ " ");
    }
    return sentence;
  }
  let descriptionChunk = [];
  let j = 1;
  for (let i = 1; i <= 10000000; i++) {
    let descript1 = `${i},${j},${optionalDescription[0]},${sentenceMake(30)}`;
    j++;
    descriptionChunk.push(descript1);
    if (descriptionChunk.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), descriptionChunk.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      descriptionChunk = [];
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), ('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (i % 500000 === 0) {
      console.log("i",i);
    }
  }
  let k = 1;
  for (let i = 10000001; i <= 20000000; i++) {
    let descript2 = `${i},${k},${optionalDescription[1]},${sentenceMake(30)}`;
    k++;
    descriptionChunk.push(descript2);
    if (descriptionChunk.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), descriptionChunk.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      descriptionChunk = [];
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), ('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (i % 500000 === 0) {
      console.log("j",i);
    }
  }
  let l = 1;
  for (let i = 20000001; i <= 30000000; i++) {
    let descript3 = `${i},${l},${optionalDescription[2]},${sentenceMake(30)}`;
    l++;
    descriptionChunk.push(descript3);
    if (descriptionChunk.length === 500000) {
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), descriptionChunk.join(`\n`), (err) => {
        if (err) {
          throw err;
        }
      });
      descriptionChunk = [];
      fs.appendFileSync(path.join(__dirname, `../heavySink/descriptTableCass.csv`), ('\n'), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (i % 500000=== 0) {
      console.log("k",i);
    }
  }
}
console.time("Start");
generate();
console.timeEnd("Start");
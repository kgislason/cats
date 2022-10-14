// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {    
    if (!error) done(data);
  });
};

const printCatBreed = breed => {
  console.log('Return value: ', breed);
}

const bombay = breedDetailsFromFile('Bombay', printCatBreed);
const balinese = breedDetailsFromFile('Balinese', printCatBreed);
// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {   
    if (!error) {
      done(data);
    } else {
      done(undefined);
    }
  });
};

const printCatBreed = breed => {
    console.log('Return value: ', breed);
}

breedDetailsFromFile('Cheese', printCatBreed);

module.exports = breedDetailsFromFile

// Return an array without duplicates
//Giving meaningful names
arrayWithoutDuplicates = (value, numberOfRepeats) => {
  if (numberOfRepeats <= 0) return [];
  else {
    result = [];
    for (let i = 0; i < numberOfRepeats; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = arrayWithoutDuplicates;

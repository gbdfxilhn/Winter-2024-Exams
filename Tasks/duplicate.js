// Return an array without duplicates
//Declaring function and array with 'const'
const arrayWithoutDuplicates = (value, numberOfRepeats) => {
  if (numberOfRepeats <= 0) return [];
  else {
    const result = [];
    for (let i = 0; i < numberOfRepeats; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = arrayWithoutDuplicates;

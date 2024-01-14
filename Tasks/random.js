// Generate random integer value in given range
//Declaring function as 'const'
const generateRandomIntegerInRange = (minimum, maximum) => {
  if (maximum === undefined) {
    maximum = minimum;
    return Math.floor(Math.random() * (maximum + 1));
  } else {
    return minimum + Math.floor(Math.random() * (maximum - minimum + 1));
  }
};

module.exports = generateRandomIntegerInRange;

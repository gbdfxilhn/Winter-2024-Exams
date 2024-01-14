// Generate random integer value in given range
//Removing unnecessary blocks
const generateRandomIntegerInRange = (minimum, maximum) => {
  if (maximum === undefined) {
    maximum = minimum;
  } 
  return minimum + Math.floor(Math.random() * (maximum - minimum + 1));
  
};

module.exports = generateRandomIntegerInRange;

// Get one random element from an array
//Giving to variables and function meaningful names
const getOneRandomElement = (array) => {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

module.exports = getOneRandomElement;

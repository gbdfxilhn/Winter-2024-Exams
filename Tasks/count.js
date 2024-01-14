// Sum all number values in dict
//Declaring arrow function and 'key' as const, 'sum' as let and giving meaningful names
const sumOfNumbers = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  keys.forEach((key) => {
    const value = object[key];
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = sumOfNumbers;

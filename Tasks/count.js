// Sum all number values in dict
//Replacing forEach loop with for...of loop and improving readability
const sumOfNumbers = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  
  for (const key of keys){
    const value = object[key];
    
    if (typeof value === 'number') {
    sum += value;
    }
  };
  return sum;
};

module.exports = sumOfNumbers;

// Find an intersection of two dictionaries

function intersectionOfTwoDictionaries(firstObject, secondObject) {
  const keys = Object.keys(firstObject);
  for (const attributeName of keys) {
    if (firstObject[attributeName] === secondObject[attributeName]) {
      secondObject[attributeName] = firstObject[attributeName];
    } 
      
    else {
      delete firstObject[attributeName];
    } 
  }
  return firstObject;
};

module.exports = intersectionOfTwoDictionaries;

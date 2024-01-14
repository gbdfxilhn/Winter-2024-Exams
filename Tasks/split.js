// Split an array into two parts

const splitArray = (splitIndex, array) => {
  const begin = array.slice(0, splitIndex);
  array = array.slice(splitIndex, array.length);
  return [begin, array];
};

module.exports = splitArray;

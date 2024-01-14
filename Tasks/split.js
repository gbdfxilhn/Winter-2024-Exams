// Split an array into two parts

let splitArray = (splitIndex, array) => {
  begin = array.slice(0, splitIndex);
  const len = array.length;
  array = array.slice(splitIndex, len);
  return [begin, array];
};

module.exports = splitArray;

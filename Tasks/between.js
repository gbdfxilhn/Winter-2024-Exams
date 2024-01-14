// Extract substring between prefix and suffix

const getValueBetween = (fullString, prefix, suffix) => {
  const index = fullString.indexOf(prefix);
  if (index === -1) return '';  
  else {
    let prefixLength = index + prefix.length;
    fullString = fullString.substring(prefixLength);
    if (suffix) {
      index = fullString.indexOf(suffix);
      if (index === -1)  return '';
      else fullString = fullString.substring(0, index);
    }
  }
  return fullString;
};

module.exports = getValueBetween;

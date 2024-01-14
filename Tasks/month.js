// Get month number

const MONTHS = ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'jun' , 'jul' , 'aug' , 'sep' , 'oct' , 'nov' , 'dec'];

const monthNumber = (givenMonth) => {
  
  for (let i = 0; i < MONTHS.length; i++) {
    if (givenMonth.toLowerCase().startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNumber;

// Get day number

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (givenDay) => {
  let i;
  for (i = 0; i < DAYS_OF_WEEK.length; i++) {
    if (givenDay.startsWith(DAYS_OF_WEEK[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;

const dateMath = require('date-math');

const cycleCount = (now, then, cycleLength) => {
  const totalDays = dateMath.day.diff(now, then);
  let dayNumber = totalDays - (Math.floor(totalDays / cycleLength) * cycleLength);
  dayNumber += 1;
  return dayNumber;
};

exports.cycleCount = cycleCount;

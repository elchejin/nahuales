const dateMath = require('date-math');

const cycleCount = (now, then, cycleLength) => {
  const totalDays = dateMath.day.diff(now, then);
  const dayNumber = totalDays - (Math.floor(totalDays / cycleLength) * cycleLength);
  return dayNumber + 1;
};

exports.cycleCount = cycleCount;

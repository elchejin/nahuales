'use strict';
const dateMath = require('date-math');

const cycleCount = (now, then, cycleLength) => {

  const totalDays = dateMath.day.diff(now, then);
  const dayNumber = totalDays - (Math.floor(totalDays/cycleLength) * cycleLength) + 1;
  return dayNumber;
}

exports.cycleCount = cycleCount;

'use strict';
const dateMath = require('date-math');

const cycleCount = (now, then, cycleLength) => {

  const reverseCount = dateMath.day.diff(now, then) < 0;
  const totalDays = reverseCount ? dateMath.day.diff(then, now) : dateMath.day.diff(now, then) + 1;
  const cycleLapses = Math.floor(totalDays/cycleLength);
  const dayDiff = totalDays - (cycleLapses * cycleLength);
  const dayNumber = reverseCount ? (dayDiff === 0 ? 1 : cycleLength + 1 - (dayDiff)) : (dayDiff === 0 ? cycleLength : dayDiff);

  return dayNumber;
}

exports.cycleCount = cycleCount;

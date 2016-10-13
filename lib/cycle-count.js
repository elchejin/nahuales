'use strict';
const dateMath = require('date-math');

const cycleCount = (now, then, cycleLength) => {

  let responseObject = {};
  // test if the date now is after date then
  responseObject.reverseCount = dateMath.day.diff(now, then) < 0;

  // if reverseCount is false
  if (!responseObject.reverseCount) {
    responseObject.totalDays = dateMath.day.diff(now, then) + 1;
    responseObject.cycleLapses = Math.floor(responseObject.totalDays/cycleLength);
    const dayDiff = responseObject.totalDays - (responseObject.cycleLapses * cycleLength)
    responseObject.dayNumber = dayDiff === 0 ? cycleLength : dayDiff;
  } else {
    // reverts order of the dates to get a positive number of total days lapsed
    responseObject.totalDays = dateMath.day.diff(then, now);
    responseObject.cycleLapses = Math.floor(responseObject.totalDays/cycleLength);
    const dayDiff = responseObject.totalDays - (responseObject.cycleLapses * cycleLength);
    responseObject.dayNumber = dayDiff === 0 ? dayDiff + 1 : cycleLength + 1 - (dayDiff);
  }

  return responseObject;
}

exports.cycleCount = cycleCount;

'use strict';
const valiDate = require('vali-date');
const cycleCount = require('./cycle-count');
const nahuales = {
  '1':  'B\'atz\'',
  '2':  'E',
  '3':  'Aj',
  '4':  'Ix',
  '5':  'Tz\'ikin',
  '6':  'Ajmak',
  '7':  'No\'j',
  '8':  'Tijax',
  '9':  'Kawok',
  '10': 'Ajpu',
  '11': 'Imox',
  '12': 'Iq\'',
  '13': 'Aq\'ab\'al',
  '14': 'K\'at',
  '15': 'Kan',
  '16': 'Kame',
  '17': 'Kej',
  '18': 'Q\'anil',
  '19': 'Toj',
  '20': 'Tz\'i'
}

const nahualMatcher = (date) => {
  if (!valiDate(date)) {
    return new Error('date format must be "YYYY-mm-dd');
  }

  const countInitDay = new Date('1983-09-16');

  let responseObject = {};
  responseObject.day = cycleCount.cycleCount(countInitDay, date, 13);
  
  const nahualCount = cycleCount.cycleCount(countInitDay, date, 20);
  for (var key in nahuales) {
    if (Number(key) === nahualCount) {
      responseObject.nahual = nahuales[key];
    }
  }

  return responseObject;
}

exports.nahual = nahualMatcher;

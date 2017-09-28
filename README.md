# Nahuales

### Module to get the respective Mayan sign of the Tzolkin calendar of a gregorian calendar date.

The Tzolkin calendar is based on 20 signs called "Nahuales" and weeks of 13 days, we have used 1983-09-16 (YYYY-mm-dd) as an init date which corresponds to 1 B'atz', and the calendaric count moves 1 row down each day which means that if we want to know the nahual for 1983-09-20 which would be 4 days after the init date, the nahual would be 5 Tz'ikin, there would be a moment where the 13 week wont match the 20 signs so the cycle of 13 would start again in 1 and both cycle counts wont match until we reach 260 days (13*20) and the whole nahual count will start.

The Nahual names may vary depending on the region and variant of the Mayan language, the names used in this module are the post-conquest Guatemalan highland calendar names.

You can find more information about Tzolkin Calendar [here](https://en.wikipedia.org/wiki/Tzolk%27in), or if you want more detailed information there is a book called ["Chʹumilal wuj"](https://books.google.com.gt/books/about/Ch%CA%B9umilal_wuj.html?hl=de&id=bUKamyk51UUC).


### Tzolkin Calendar table
| Nahual name   |   |   |   |   |   |  |   |  |   |  |   |  |   |
|----------|----|----|----|----|----|----|----|----|----|----|----|----|----|
| B'atz'   | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  |
| E        | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  |
| Aj       | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  |
| Ix       | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 |
| Tz'ikin  | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 |
| Ajmak    | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 |
| No'j     | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 |
| Tijax    | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  |
| Kawoq    | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  |
| Ajpu     | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  |
| Imox     | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  |
| Iq'      | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  |
| Aq'ab'al | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  |
| K'at     | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  |
| Kan      | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  |
| Kame     | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  |
| Kej      | 4  | 11 | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 |
| Q'anil   | 5  | 12 | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 |
| Toj      | 6  | 13 | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 |
| Tz'i'    | 7  | 1  | 8  | 2  | 9  | 3  | 10 | 4  | 11 | 5  | 12 | 6  | 13 |


:

```javascript
{ day: 1, nahual: 'B\'atz\'' }
```

### Usage

```
$ npm install nahuales
```
This module accepts a date and will give you the exact nahual as an object.

On your project:

```javascript
const newNahual = require('nahuales');
const date = new Date('1983-09-16');
const myNahual = newNahual.nahual(date);
console.log(myNahual);
```

It will print this on your terminal:

```
{ day: 1, nahual: 'B\'atz\'' }
```

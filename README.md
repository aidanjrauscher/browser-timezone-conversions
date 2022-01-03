# browser-timezone-conversions

A set of JavaScript functions to handle help resolve timezone-related issues on the client-side.

### toLocal.js
Functions to convert a given time or date into the client's timezone.

### toUTC.js
Functions to convert a given time or date from the client's timezone into UTC.

### dst.js
Function to counteract default Daylight Savings Time offset used in the Moment/Moment Timezone libraries. 

### Reference 
Utilizes the Moment, Moment Timezone, and JS Time Zone Detect (https://www.npmjs.com/package/jstimezonedetect) packages.

Inspired By: https://css-tricks.com/localizing-times-in-javascript/

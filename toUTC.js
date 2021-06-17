if (!sessionStorage.getItem('timezone')) {
    var tz = jstz.determine() || 'UTC';
    sessionStorage.setItem('timezone', tz.name());
}
    var currTz = sessionStorage.getItem('timezone');

function toUniversalTime(theTime) {
    //generate date & create full date in appropriate format
    var date = moment().format("YYYY-MM-DD"); 
    var dateTime = date + " " + theTime + " ";

    var timeUTC =moment(dateTime, 'YYYY-MM-DD HH:mm ', currTz).utc().format('h:mm A');
  
    return timeUTC; 
}

function toUniversalDate(theDate) {
    //create a moment with a date in the appropriate format, covert to UTC
    var dateUTC = moment(date, 'YYYY-MM-DD HH:mm', currTz).utc().format('yyyy-MM-DD');
    return dateUTC; 
}
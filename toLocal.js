if (!sessionStorage.getItem('timezone')) {
    var tz = jstz.determine() || 'UTC';
    sessionStorage.setItem('timezone', tz.name());
}
    var currTz = sessionStorage.getItem('timezone');

function toLocalTime(theTime) {
    //generate date & create full date in appropriate format
    var date = moment().format("YYYY-MM-DD"); 
    var dateTime = date + "T" + theTime + "Z"; 

    //create moment using date 
    var momentTime = moment(dateTime);

    //convert moment to user TZ
    var tzTime = momentTime.tz(currTz);

    // format the datetime to 12 hr time
    var localTime = tzTime.format('h:mm A'); 
  
    return localTime; 
}



function toLocalDate(theDate) {
    //create moment using date 
    let momentTime = moment(theDate);

    // change moment to user timezone
    let tzTime = momentTime.tz(currTz);

    // format the date to be readable
    let localDate = tzTime.format('yyyy-MM-DD'); 

    return localDate; 
}
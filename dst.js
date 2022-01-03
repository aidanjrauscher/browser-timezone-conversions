if (!sessionStorage.getItem('timezone')) {
  var tz = jstz.determine() || 'UTC';
  sessionStorage.setItem('timezone', tz.name());
}
var currTz = sessionStorage.getItem('timezone');
//takes 24hr H:mm time
function shiftDST() {
  //get current date and build datetime string 
  let isDST = true;
  let currDST = moment().isDST()
  let dateTime;
  if(currTz=="Etc/UTC" || currTz=="Etc/Greenwich" || currTz=="Etc/UCT" || currTz=="Etc/Universal" ){
    dateTime = moment().utc().format("HH:MM:SS YYYY-MM-DD");
  }
  else if(currDST==true && isDST==false){
    dateTime = moment().utc().add(1, "hours").format("HH:MM:SS YYYY-MM-DD"); 
  }
  else if(currDST==false && isDST==true){
    dateTime = moment().utc().add(-1, "hours").format("HH:MM:SS YYYY-MM-DD"); 
  }
  else{
    dateTime = moment().utc().format("HH:MM:SS YYYY-MM-DD");
  }
}

shiftDST()

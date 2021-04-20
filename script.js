const newYear = "1 Jan 2022"; //Declare the upcoming new year in Javascript date format


function countdown(){

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    //Get remaining seconds until new year
    //(newYearDate - currentDate)/1000 -> Gives number of seconds from millisecond difference
    const secondsRemaining = (newYearDate - currentDate)/1000;
    
    //Number of days remaining calculated from all seconds remaining until declared new year
    //secondsRemaining / 3600 -> Gives number of whole hours remaining
    //secondsRemaining / 3600 / 24 -> Gives number of days remaining for those the whole hours remaining
    const days = Math.floor(secondsRemaining / 3600 / 24); 

    //Number of hours remaining calculated from all seconds remaining until declared new year
    //secondsRemaining / 3600 -> Gives number of hours remaining
    //(secondsRemaining / 3600) % 24 -> Gives remaining number of hours that cannot be fit into a new day
    const hours = Math.floor(secondsRemaining / 3600) % 24;

    //Number of minutes remaining calculated from all seconds remaining until declared new year
    //secondsRemaining % (60 * 60) -> Gives the number of hours remaining that does not fulfill a new day
    //(secondsRemaining % (60 * 60))/60 -> Gives number of minutes remaining that cannot be fit into a new hour
    const minutes = Math.floor((secondsRemaining % (60 * 60))/60);

    //Number of seconds remaining calculate from all seconds remaining until declared new year
    //(secondsRemaining % 60 ) -> Gives number of seconds that cannot be fit into a new minute
    const seconds = Math.floor((secondsRemaining % 60 ));
    
    //Log all tha values to the console
    console.log("Days remaining: " + days);
    console.log("Hours remaining: " + hours);
    console.log("Minutes remaining: " + minutes);
    console.log("Seconds remaining: " + seconds);

    //Update DOM Elements to refresh the view
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    

}

//Initial function call
countdown();

//Update the view every second
setInterval(countdown,1000);
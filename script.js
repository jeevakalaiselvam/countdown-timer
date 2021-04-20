const newYear = "1 Jan 2022";


function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const secondsRemaining = (newYearDate - currentDate)/1000;
    
    const days = Math.floor(secondsRemaining / 3600 / 24);
    const hours = Math.floor(secondsRemaining / 3600) % 24;
    const minutes = Math.floor((secondsRemaining % (60 * 60))/60);
    const seconds = Math.floor((secondsRemaining % 60 ));
    
    console.log("Days remaining: " + days);
    console.log("Hours remaining: " + hours);
    console.log("Minutes remaining: " + minutes);
    console.log("Seconds remaining: " + seconds);

}

countdown();

setInterval(countdown,1000);
const endDate = new Date("31 aug, 2025 12:50:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer(){
    const now = new Date().getTime();
    const distanceCoverd = now-startDate;
    const distancePending = endDate - now;

    // calculate days, hr ,min, secs
    //1 day = 24* 60* 60*1000ms
    
    const oneDayMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecondInMillis = (1000);
    
    const days = Math.floor(distancePending / (oneDayMillis));
    const hours = Math.floor((distancePending % (oneDayMillis) / (oneHourInMillis)));
    const mins = Math.floor((distancePending % (oneHourInMillis)) / (oneMinInMillis));
    const secs = Math.floor((distancePending % (oneMinInMillis)) / (oneSecondInMillis));

    // populate in Ui

    document.getElementById("Days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("Min").innerHTML = mins;
    document.getElementById("Second").innerHTML = secs;

    // calculate width percentage for progess bar

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCoverd/totalDistance) * 100;

    //set width for progess bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("Countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
} , 1000);
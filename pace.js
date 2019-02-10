 var distanceInput = document.getElementById("distanceInput"),
    hoursInput = document.getElementById("hoursInput"),
    minutesInput = document.getElementById("minutesInput"),
    calculateBtn = document.getElementById("calculateButton"),
    showPace = document.getElementById("showPace");

calculateBtn.addEventListener("click", function () {
    var kilometers = parseFloat(distanceInput.value),
        hours = parseFloat(hoursInput.value),
        minutes = parseFloat(minutesInput.value),
        seconds = parseFloat(secondsInput.value);

    
    function validateInput(value, input){
         if(isNaN(value)){
        input.style.borderColor="Red";
        return;
        }
        else{
        input.style.borderColor="initial";
        }
    }
    validateInput(kilometers, distanceInput);
    validateInput(hours, hoursInput);
    validateInput(minutes, minutesInput);
    validateInput(seconds, secondsInput);

    if (!validateInput)
        return;
    
        
    var totalMinutes = hours * 60 + minutes + seconds / 60,
        pace = totalMinutes / kilometers,
        paceMinutes = Math.floor(pace),
        paceSeconds = Math.round(pace - paceMinutes);
    
    
        if(paceSeconds < 10){
        paceSeconds = "0" + paceSeconds;
    }

    showPace.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per Kilometer";

}); 



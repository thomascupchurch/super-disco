


var userInputEl = document.getElementsByClassName("description");
var eventDescription = userInputEl.value;
var saveButton = document.getElementsByClassName("saveBtn");
var closedLock = document.createElement("span", "class:oi oi-lock-locked");
// saveButton.appendChild(closedLock);

// time variables
var timesArr = ['9:00AM', '10:00AM', '11:00AM', '12:00pm', '1:00pm', '2;00pm', '3:00pm', '4:00pm', '5:00pm'];
let currentTime = moment().format('DD/MM/YYYY hh:mm:ss');                    
let blockTimeEl = document.getElementById("time-block");
var isolateTime = currentTime.split(" ");
var isolateHour = isolateTime[1].split(":");
var roundHour = isolateHour[0];
    // console.log(roundHour);
var dayEl = document.querySelector("#currentDay"); 
dayEl.textContent = moment().format("MMMM Do, YYYY");


function matchTimes() {
    if (blockTimeEl.id === roundHour) {
        blockTimeEl.class = "present";
    } else {
        if (blockTimeEl.id > roundHour) {
            blockTimeEl.class = "future";
        } else {
            if (blockTimeEl.id < roundhour) {
                blockTimeEl.class = "past";
            }
        }

    }
    
};



// timesArr.forEach(matchTimes)  
    


// function getBlockTime(i) {
    
        
    
//     var blockTime = timesArr[i];
//     for (var i=moment().hour; i < timesArr.length - 1; i++) {
//     let blockTime = document.getElementById(timesArr[i]);
//     console.log(blockTime);
//     }
// }

    

function userInput() {


    
    // get html element corresponging to user's click

    
    
    // color time blocks based on past, now, or future


    // when user clicks middle segment of that row, make it editable

}



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// moment.locale();         // en
// moment().format('LT');   // 6:47 PM
// moment().format('LTS');  // 6:47:37 PM
// moment().format('L');    // 07/15/2021
// moment().format('l');    // 7/15/2021
// moment().format('LL');   // July 15, 2021
// moment().format('ll');   // Jul 15, 2021
// moment().format('LLL');  // July 15, 2021 6:47 PM
// moment().format('lll');  // Jul 15, 2021 6:47 PM
// moment().format('LLLL'); // Thursday, July 15, 2021 6:47 PM
// moment().format('llll'); // Thu, Jul 15, 2021 6:47 PM

// moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
// moment().startOf('day').fromNow();        // 19 hours ago
// moment().endOf('day').fromNow();          // in 5 hours
// moment().startOf('hour').fromNow();      


var userInputEl = document.getElementsByClassName("description");
var eventDescription = userInputEl.value;
var saveButton = document.getElementsByClassName("saveBtn");
var closedLock = document.createElement("span", "class:oi oi-lock-locked");
// saveButton.appendChild(closedLock);

// time variables
// var timesArr = ['9:00AM', '10:00AM', '11:00AM', '12:00pm', '1:00pm', '2;00pm', '3:00pm', '4:00pm', '5:00pm'];


// use moment to get time in 24 hour format
let currentTime = moment().format('DD/MM/YYYY HH:mm:ss');

// identify the div I want to target
let blockTimeEl = document.getElementsByClassName("hour");

// get the hour portion out of the 24-hour time from moment
var isolateTime = currentTime.split(" ");
var isolateHour = isolateTime[1].split(":");
var roundHour = isolateHour[0];



// turn rounded hour into a string for associating with data-id


var dayEl = document.querySelector("#currentDay"); 
dayEl.textContent = moment().format("MMMM Do, YYYY");


var updateHourStatus = function() {
    
    $(".hour").each(function () {
        if (parseInt($(this).attr("data-id")) == roundHour) {
            $(this).addClass("present");
        } else if (parseInt($(this).attr("data-id")) > roundHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })
};

updateHourStatus();



// get key:value from local storage and display in textarea element







// using save button to assign key:value to local storage

$("#button09").click(function() {
    var descriptionText = document.getElementById("description09").value;
    console.log(descriptionText)
    localStorage.setItem("9:00", descriptionText);
 });

 $("#button10").click(function() {
    var descriptionText = document.getElementById("description10").value;
    console.log(descriptionText)
    localStorage.setItem("10:00", descriptionText);
 });









//  $(".saveBtn").click(function() {
//     console.log(this);
//  });

    // var sib = this.previousSibling.previousSibling.textContent;
    // console.log(sib);
    // var getTextArea = $(this).previousElementSibling;
    // console.log(getTextArea);

    // var next = getNextSibling(getTextArea);
    // console.log(next);

    // var textToSave = $(this).sibling("#description-text").textContent;
    // console.log(textToSave);
    // var buttonSibsText = buttonSib[1].textContent;
    // console.log(buttonSibsText);
    // localStorage.setItem('')
//  })


   
    
    // for each textarea with a class of "description"
    // var textValue = $(".description").text();
    

        // if ($(this).textContent) {
            
        //     // for the button element that's a sibling of the description box
        //     $(this).sibling(".saveBtn").addEventListener("click", storeDescription());
        //     var storeDescription = function() {
        //         // save textContent to local storage
        //         localStorage.setItem(data-id, textContent);
        //     };
        // }
    









// $(".saveBtn").addEventListener("click", saveDescription()); 



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


// click listener for 9:00 textarea => runs function to capture entered text
// $("#description09").click(function() {
//     console.log("description area 09 has been clicked");
//     var text09 = this.value;
//     console.log(text09);
//     var saveButton09 = document.getElementById("button09");
//     saveButton09.click(saveToLocalStorage());
//     document.getElementById("lock09").addClass("hide");
// })

// $("#description10").click(function() {
//     console.log("description area 10 has been clicked");
//     var text10 = this.value;
//     console.log(text10);
    
// })

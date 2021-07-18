// When page is loaded, function to populate time blocks with any saved event descriptions from local storage

function getStorage() {
    document.getElementById("description09").textContent = localStorage.getItem("9:00", "textContent");
    document.getElementById("description10").textContent = localStorage.getItem("10:00", "textContent");
    document.getElementById("description11").textContent = localStorage.getItem("11:00", "textContent");
    document.getElementById("description12").textContent = localStorage.getItem("12:00", "textContent");
    document.getElementById("description13").textContent = localStorage.getItem("1:00", "textContent");
    document.getElementById("description14").textContent = localStorage.getItem("2:00", "textContent");
    document.getElementById("description15").textContent = localStorage.getItem("3:00", "textContent");
    document.getElementById("description16").textContent = localStorage.getItem("4:00", "textContent");
    document.getElementById("description17").textContent = localStorage.getItem("5:00", "textContent");
};
getStorage();

var dayEl = document.querySelector("#currentDay"); 
dayEl.textContent = moment().format("MMMM Do, YYYY");

var userInputEl = document.getElementsByClassName("description");
var eventDescription = userInputEl.value;
var saveButton = document.getElementsByClassName("saveBtn");
var closedLock = document.createElement("span", "class:oi oi-lock-locked");

let currentTime = moment().format('DD/MM/YYYY HH:mm:ss');


let blockTimeEl = document.getElementsByClassName("hour");

// separate the time portion out of the 24-hour time/date from moment
var isolateTime = currentTime.split(" ");
// separate the hour from the hour:minute format
var isolateHour = isolateTime[1].split(":");
// turn that separated hour into a variable to compare to time block
var roundHour = isolateHour[0];




// compare the time-block's hour identity to the actual current hour, and style accordingly
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

 $("#button11").click(function() {
    var descriptionText = document.getElementById("description11").value;
    console.log(descriptionText)
    localStorage.setItem("11:00", descriptionText);
 });

 $("#button12").click(function() {
    var descriptionText = document.getElementById("description12").value;
    console.log(descriptionText)
    localStorage.setItem("12:00", descriptionText);
 });

 $("#button13").click(function() {
    var descriptionText = document.getElementById("description13").value;
    console.log(descriptionText)
    localStorage.setItem("1:00", descriptionText);
 });

 $("#button14").click(function() {
    var descriptionText = document.getElementById("description14").value;
    console.log(descriptionText)
    localStorage.setItem("2:00", descriptionText);
 });

 $("#button15").click(function() {
    var descriptionText = document.getElementById("description15").value;
    console.log(descriptionText)
    localStorage.setItem("3:00", descriptionText);
 });

 $("#button16").click(function() {
    var descriptionText = document.getElementById("description16").value;
    console.log(descriptionText)
    localStorage.setItem("4:00", descriptionText);
 });

 $("#button17").click(function() {
    var descriptionText = document.getElementById("description17").value;
    console.log(descriptionText)
    localStorage.setItem("5:00", descriptionText);
 });












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

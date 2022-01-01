$(document).ready(function (){
    var eventArray = [];

    //fuction to get the data from local storage
    init()

    //display current date at the top of page
    $("#currentDay").text(moment().format('MMMM Do, YYYY'));

    //function to color-code data based on past, present or future 
    $(".row").each(function (){
        var hour = parseInt($(this).attr("data-hour"));
        var time = parseInt(moment().format('H'));

        if (hour == time){
            $(this).find("textarea").addClass("present");
        } if (hour > time) {
            $(this).find("textarea").addClass("future");
        } if (hour < time) {
            $(this).find("textarea").addClass("past");
        }
    })
})

//Save the user input from textarea into array and assigns it to the time based on data-hour attribute, array is then saved in local storage
$(".saveBtn").on("click", function(){
    var text = $(this).parent().find("textarea").val();
    var hour = $(this).parent().attr("data-hour");

    var calendarEvent = {
        hour: hour,
        text: text,
    };

    eventArray.push(calendarEvent);
    localStorage.setItem("calendarEvent", JSON.stringify(eventArray));
})

//Function takes data from local storage and displays it on the page
function init() {
    var storedEvents = JSON.parse(localStorage.getItem("calendarEvent"));
    if (storedEvents !== null){
        eventArray = storedEvents;
    }

    for (i=0; i <eventArray.length; i++)
    $(".row").each(function(){
        if ($(this).attr("data-hour") == eventArray[i].hour){
            $(this).find("textarea").val(eventArray[i].text);
        }
    })
}

//Button to clear data from local storage/array
$(".btn").on("click", function(){
    localStorage.clear();

    for (i=0; i < eventArray.length; i++)
    $(".row").each(function(){
        if ($(this).attr("data-hour") == eventArray[i].hour) {
            $(this).find("textarea").val("");
        }
    })
    eventArray();
})
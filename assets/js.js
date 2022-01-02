// Set current day and date
function currentDay() {
    $("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
}

// Save button to save tasks
$(".saveBtn").on("click", function() {
    var textValue = $(this).siblings(".description").val();
    var hourDiv = $(this).parent().attr("id");

    localStorage.setItem(hourDiv, textValue);
});

// Repeats for each hour
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// function to assign past/present/future color codes
function colorCode() {
    $(".time").each(function() {
        var divID = parseInt($(this).attr("id")); 
        var currentTime = moment().hours();

        if (currentTime === divID) {
            $(this).removeClass("future")
            $(this).addClass("present")
        }
        else if (currentTime > divID) {
            $(this).removeClass("present")
            $(this).addClass("past")
        }
        else {
            $(this).addClass("future")
        }
    })
};

currentDay();
colorCode();

// intervals to update page
setInterval(colorCode, 60000);
setInterval(currentDay, 3600000)
var today = dayjs();
var saveBTN = $(".saveBtn");
var timeBlock = $(".time-block");
var currentHour = dayjs().format('HH');

// adds the date to the header
$(function () {
  $("#currentDay").text(today.format("dddd, MMM D YYYY"));
});


// loops over time blocks
timeBlock.each(function () {
 // To check the time and add the classes for background indicators
  if (this.id < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (this.id === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

  }
})

//adds click listener for saveBTN
saveBTN.on("click", function () {
  //gets values of descruption and time using JQUERY
  var text = $(this).siblings("textarea").val();
  var time = $(this).parent().attr("id");
  //saves text in local storage
  localStorage.setItem(time, text);
});

//saves the user inputs and it'll save data even if user refreshes data will stay
$(".description").each(function () {
  timeBlockId = $(this).parent().attr("id");
  eventShow = localStorage.getItem(timeBlockId);
  $(this).val(eventShow);
});



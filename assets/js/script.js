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



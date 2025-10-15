function clock() {
  var monthName = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "september",
    "october",
    "November",
    "December",
  ];
  var dayName = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  var today = new Date();
  document.getElementById('Date').innerHTML =
    dayName[today.getDay()] +
    " " +
    today.getDate() +
    " " +
    monthName[today.getMonth()] +
    " " +
    today.getFullYear();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 11 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById('hour').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;

}

setInterval(clock, 1000);

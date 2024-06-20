const day = document.getElementById("day");
const weekDay = document.getElementById("week-day");
const month = document.getElementById("month");
const year = document.getElementById("year");

let date = new Date();

day.innerHTML = date.getDate();
weekDay.innerHTML = getDayName();
month.innerHTML = getMonthName();
year.innerHTML = date.getFullYear();

function getDayName() {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Fri",
    "Saturday",
  ];
  return weekday[new Date().getDay()];
}
function getMonthName() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date().getMonth()];
}

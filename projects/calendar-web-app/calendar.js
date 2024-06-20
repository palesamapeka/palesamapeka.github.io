const day = document.getElementById("day");
const weekDay = document.getElementById("week-day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hero = document.getElementById("hero")

const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateDate() {
  let date = new Date();
  day.innerHTML = date.getDate();
  weekDay.innerHTML = getDayName();
  month.innerHTML = getMonthName();
  year.innerHTML = date.getFullYear();
}

updateDate();

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

function updateTime() {
  let date = new Date();
  hour.innerHTML = String(date.getHours()).padStart(2, "0");
  minutes.innerHTML = String(date.getMinutes()).padStart(2, "0");
  seconds.innerHTML = String(date.getSeconds()).padStart(2, "0");
}

setInterval(updateTime, 1000);
updateTime();

/**
 * Use the setInterval to dynamically update the UI with something cool, I don't know what yet.
 */


const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const week_days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const all_months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = week_days[today.getDay()];
month.innerHTML = all_months[today.getMonth()];
year.innerHTML = today.getFullYear();
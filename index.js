let day = document.getElementById("CurrentDayOfTheWeek");
let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let dateToday = new Date();
let dayToday = dateToday.getDay();
day.innerHTML = `Today is ${DaysOfWeek [dayToday]} `;

now = new Date();
localtime = now.toString();
utctime = now.toGMTString();

document.write("<p><strong>UTC time:</strong> " + utctime +
"</p>");
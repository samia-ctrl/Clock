let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  let minutes = now.getMinutes();
  let minDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;

  let hour = now.getHours();
  let hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

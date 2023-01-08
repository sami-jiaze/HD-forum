const time = new Date();
const month = time.getMonth() + 1;
let seconds: string | number = time.getSeconds();
let minutes: string | number = time.getMinutes();
if (seconds < 10) {
  seconds = "0" + seconds;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
const newdate1 =
  time.getFullYear() +
  "-" +
  month +
  "-" +
  time.getDate() +
  " " +
  time.getHours() +
  ":" +
  minutes +
  ":" +
  seconds;

export { newdate1 };

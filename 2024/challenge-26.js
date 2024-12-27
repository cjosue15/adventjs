function getCompleted(timeWorked, totalTime) {
  const [hour, minutes, seconds] = totalTime.split(":");
  const [timeHour, timeMinutes, timeSeconds] = timeWorked.split(":");
  const total = Number(hour) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  const time =
    Number(timeHour) * 60 * 60 + Number(timeMinutes) * 60 + Number(timeSeconds);

  console.log((time / total) * 100);
  console.log(Math.abs((time / total) * 100));
  console.log(Math.ceil((time / total) * 100));
  console.log(Math.floor((time / total) * 100));

  return `${Math.round((time / total) * 100)}%`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // 33%
console.log(getCompleted("02:00:00", "04:00:00")); // 50%
console.log(getCompleted("00:10:00", "01:00:00")); // 17%

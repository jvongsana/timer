let input = process.argv.slice(2);
let timeArr = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    timeArr.push(Number(input[i]));
  }
}
timeArr.sort(function(a, b) {
  return a - b;
});
// Uses setTimeout (ignore line 13-17 if testing setInterval)
for (let i = 0; i < timeArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`beep\n`);
  }, timeArr[i] * 1000);
}

// same outcome but with setInterval (ignore line 19-31 if testing setTimeout)
// let count = 0;
// let position = 0;
// let clock = setInterval(() => {
//   if (position === timeArr.length) {
//     clearInterval(clock);
//     return '\n';
//   } else if (timeArr[position] === count) {
//     process.stdout.write(`beep`);
//     position++;
//   }
//   count++;
// }, 1000);
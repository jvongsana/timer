let input = process.argv.slice(2);
let timeArr = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    timeArr.push(Number(input[i]));
  }
}
timeArr.sort(function(a, b) {
  return a - b;
});

let position = 0;

let clock = setInterval(() => {
  if (position === timeArr.length) {
    clearInterval(clock);
    return '\n';
  } else if (timeArr[position] === count) {
    process.stdout.write(`beep`);
    console.log(count * 1000);
    position += 1;
  }
  count++;
}, 1000);


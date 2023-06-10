const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  delay += 75; // Increment the delay by 50ms for each character
}

// Calculate the total delay needed for the newline character
const totalDelay = sentence.length * 75;

// Use setTimeout to print the newline after all the characters are written out
setTimeout(() => {
  process.stdout.write('\n');
}, totalDelay);

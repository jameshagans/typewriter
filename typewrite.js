const sentence = "hello there from lighthouse labs";

let timer = 1000; 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 1000
};

setTimeout(() => {
  process.stdout.write('\n');
}, timer);






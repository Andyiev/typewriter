const sentenceToType = function(stringToType) {
  let seconds = 1000;
  for (const char of stringToType) {
    setTimeout(() => {
      process.stdout.write(char);
    }, seconds)// <= We delay typing of each letter. The countdown starts at the same moment, but each letter will be printed in 50ms later than the previose one
    seconds += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");// <= We delay of moving into the next line to be done AFTER all letters
  }, seconds)
};

sentenceToType("hello there from lighthouse labs");
//sentenceToType("hello everybody over there!")
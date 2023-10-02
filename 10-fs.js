//we can do it synchronously or asnychronously  blocking or nonblocking ...
const { readFileSync, writeFileSync } = require('fs');
//different ways to access methods
//const fs = require('fs')
//fs.read

const first = readFileSync('../content/first.txt', 'utf8');
const second = readFileSync('../content/second.txt', 'utf8');

console.log(first, second);
writeFileSync(
  '../content/result-sync.txt',
  `here is the result : ${first},${second}`,
  {
    flag: 'a',
  }
);
//flag a repeats the what we wrote

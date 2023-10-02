const { readFile, writeFile } = require('fs');

//callback, we run it when were done.

//similar to add event listener, callback will run when we click on the button.

readFile('../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('../content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      '../content/result-async.txt',
      `${first},${second} previous 2 notes`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
//callback hell

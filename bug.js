const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing here
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  eval("console.log('insecure')"); // ESLint will flag this
  res.send('Secure Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

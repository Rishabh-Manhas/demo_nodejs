const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('it is what it is');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

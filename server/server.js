const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log('\x1b[32m%s\x1b[0m',`Listening on port ${ this.address().port }`);
});

const express = require('express');

const app = express();
const port = 8888;
app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port);

console.log('Tesla Server Stated at http://localhost:' + port);
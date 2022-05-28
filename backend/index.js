var express = require('express');
var app = express();

app.get('/api/getMsg', function (req, res) {
   res.send('Secret Message : 46648882'); // send text to client
})

/* istanbul ignore next */
require.main === module && app.listen(3000, function () {
  if (!module.children) {
    console.log('Express started on port 3000, http://127.0.0.1:3000/api/getMsg');
  }
  console.log('Express started on port 3000, http://127.0.0.1:3000/api/getMsg');
});
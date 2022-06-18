var express = require('express');
var cors = require('cors')
var app = express()

const corsOptions = {
    origin: "https://melstolit-dargox-wqwrxp4f97qv-3000.githubpreview.dev/",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true
  }

app.use(cors(corsOptions))
app.get('/api/getMsg', function (req, res) {
   res.send('Secret Message : 46648882'); // send text to client
})

/* istanbul ignore next */
require.main === module && app.listen(3000, function () {
  if (!module.children) {
    console.log('Express started on port 3000');
  }
});
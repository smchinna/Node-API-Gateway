var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/url", (req, res, next) => {
  console.log("Calleed URL")
  res.json({
    status: {
      status_code: 'SUCCESS',
      status_description: {
        description_code: 'NOT_SPECIFIED',
        description: 'Fetch app status success'
      }
    }
  });
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
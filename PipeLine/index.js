var express = require("express");
var app = express();
var request = require("request");
var cors = require("cors");

const API_HOST = "http://localhost:3000";
app.use(cors());

app.get("/url", (req, res, next) => {
    console.log("CCC", req.headers)
  var url = API_HOST + "/url";
  req.pipe(request(url)).pipe(res);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
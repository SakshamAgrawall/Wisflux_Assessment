const express = require("express");
const database= require("./db")
const port = 8888;
const app = express();
const cors = require("cors")
const util = require("util")

app.use(cors())

// db connect

database.connect()
database.set=util.promisify(database.set);

// get api for count

app.get("/", async(req, res) => {
    database.incr('vc');
   database.get('vc', function (err, count) {
         res.send({count});
  });
});
app.listen(port, () => {
  console.log(`listening at port : ${port}`);
});

const express = require("express");

//local import files

const connectDb = require("./db");

const app = express();

app.listen(3000, () => {
  console.log("server 3000");
}).on,
  (err) => console.log("server ignition failed:\n", err);

connectDb().then((data) => {
  console.log("db connection successful ");
})
.catch(err => console.log('Error in connecting database\n:', err))

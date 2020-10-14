// importing libraries
require('dotenv').config()
require('./connection/database')
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;
const app=express()

//writting stream for logs
const logStream = fs.createWriteStream(path.join(__dirname, "server.log"), {
  flags: "a",
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(morgan("combined", { stream: logStream }));

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});

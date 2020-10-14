// importing libraries
require("dotenv").config();
require("./connection/database");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;
const app = express();

const authRoute = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

//writting stream for logs
const logStream = fs.createWriteStream(path.join(__dirname, "server.log"), {
  flags: "a",
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(morgan("combined", { stream: logStream }));

app.use("/api/auth", authRoute);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});

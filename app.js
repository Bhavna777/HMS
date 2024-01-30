const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));

// Route Imports

const patient = require('./routes/patient')
const hospital = require('./routes/hospital')
const psychiatrist = require('./routes/psychiatrist')

app.use("/api/v1", patient);
app.use("/api/v1", hospital)
app.use("/api/v1", psychiatrist)

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
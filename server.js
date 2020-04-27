const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
const db = require("./models");
=======
// const db = require("./models");
>>>>>>> master

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

const apiController = require("./controllers/apiController");
const htmlController = require("./controllers/htmlController");

app.use(apiController);
app.use(htmlController);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
>>>>>>> master
});

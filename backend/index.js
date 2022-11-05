const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const express = require("express");
const topicRouter = require("./routes/topicRoutes");
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!")); // eslint-disable-line

app.use("/api/v1/topics", topicRouter);
app.use("/api/v1/users", userRouter);

// middleware for 404 routes
app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl}, sorry!`, 404));
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`); // eslint-disable-line
});

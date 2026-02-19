const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// middlewares
app.use(errorHandler);
app.use(cors());
app.use(express.json());

// routes
app.use("/users", require("./routes/user.routes"));
app.use("/reviews", require("./routes/review.routes"));
app.use("/soil", require("./routes/soil.routes"));
app.use("/crops", require("./routes/crop.routes"));
app.use("/guess-farming", require("./routes/guessFarming.routes"));
app.use("/crop-monitoring", require("./routes/cropMonitoring.routes"));
app.use("/disease", require("./routes/disease.routes"));
app.use("/weather", require("./routes/weather.routes"));

// test route
app.get("/", (req, res) => {
  res.send("Agritech Server is running successfully!");
});

module.exports = app;

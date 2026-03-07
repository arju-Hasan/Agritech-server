// const express = require("express");
// const cors = require("cors");
// const errorHandler = require("./middlewares/error.middleware");

// const app = express();

// // middlewares
// app.use(errorHandler);
// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/users", require("./routes/user.routes"));
// app.use("/reviews", require("./routes/review.routes"));
// app.use("/soil", require("./routes/soil.routes"));
// app.use("/crops", require("./routes/crop.routes"));
// app.use("/guess-farming", require("./routes/guessFarming.routes"));
// app.use("/crop-monitoring", require("./routes/cropMonitoring.routes"));
// app.use("/disease", require("./routes/disease.routes"));
// app.use("/weather", require("./routes/weather.routes"));

// // test route
// app.get("/", (req, res) => {
//   res.send("Agritech Server is running successfully!");
// });

// module.exports = app;


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const errorHandler = require("./middlewares/error.middleware");

const app = express();

// ------------------
// Middlewares
// ------------------
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ------------------
// Routes
// ------------------

app.use("/users", require("./routes/user.routes"));
app.use("/reviews", require("./routes/review.routes"));
app.use("/soil", require("./routes/soil.routes"));
app.use("/crops", require("./routes/crop.routes"));
app.use("/guess-farming", require("./routes/guessFarming.routes"));
app.use("/crop-monitoring", require("./routes/cropMonitoring.routes"));
app.use("/disease", require("./routes/disease.routes"));
app.use("/weather", require("./routes/weather.routes"));

// 👇 Add your new modules here
app.use("/products", require("./routes/product.routes"));
app.use("/orders", require("./routes/order.routes"));
app.use("/transactions", require("./routes/transaction.routes"));
app.use("/notifications", require("./routes/notification.routes"));
app.use("/messages", require("./routes/message.routes"));

// ------------------
// Test Route
// ------------------
app.get("/", (req, res) => {
  res.send("Agritech Server is running successfully!");
});

// ------------------
// Error Handler (MUST BE LAST)
// ------------------
app.use(errorHandler);

module.exports = app;
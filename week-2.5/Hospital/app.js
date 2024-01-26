// app.js
const express = require("express");
const app = express();
const users = require("./users");
app.use(express.json());
app.get("/", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.id;
  if (username !== "kabbo" || password !== "kabbo") {
    // authetication
    res.status(400).json({
      msg: "Invalid username or password",
    });
    return;
  }
  if (kidneyId < 1 || kidneyId > 2) {
    res.status(403).json({
      msg: "Invalid input",
    });
    return;
  }
  const john_kidneys = users[0].kidneys;
  const number_of_kidneys = john_kidneys.length;
  const number_of_healthy_kidneys = john_kidneys.filter(
    (item) => item.healthy === true,
  ).length;
  const number_of_unhealthy_kidneys =
    number_of_kidneys - number_of_healthy_kidneys;

  res.json({
    number_of_kidneys,
    number_of_healthy_kidneys,
    number_of_unhealthy_kidneys,
  });
});

module.exports = app;

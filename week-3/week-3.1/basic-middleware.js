const express = require("express");
const app = express();
function UserMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username !== "kabbo" || password !== "kabbo") {
    res.status(400).json({
      msg: "invalid authetication",
    });
  } else {
    next();
  }
}
function KidneyMiddleware(req, res, next) {
  const n = req.query.n;
  if (n < 0 || n > 2) {
    res.status(403).json({
      msg: "invalid input",
    });
  } else {
    next();
  }
}
app.use(KidneyMiddleware);

app.get("/health-checkup", UserMiddleware, (req, res) => {
  res.json({
    msg: "your health is healthy",
  });
});

app.get("/kidney-checkup", (req, res) => {
  res.json({
    msg: "Your kidney is healthy",
  });
});

app.listen(3000);

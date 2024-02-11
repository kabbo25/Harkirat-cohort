const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/sum", (req, res) => {
  a = parseInt(req.query.a);
  b = parseInt(req.query.b);
  const c = a + b;
  res.send(c.toString());
});
app.listen(3000);

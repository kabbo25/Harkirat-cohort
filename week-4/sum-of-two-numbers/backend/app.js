const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/sum", (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    const c = a + b;
    res.send(c.toString());
});
app.listen(4000);
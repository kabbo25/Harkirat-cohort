const jwt = require("jsonwebtoken");
const jwtpassword = "12345"; // password should be string
const obj = {
  name: "kabbo25@gmail.com",
  pass: "kabbo1234",
};

const token = jwt.sign(obj, jwtpassword);
console.log(token);

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const z = require("zod");
const inputSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const app = express();

const ALL_USERS = [
  {
    username: "sarthak@gmail.com",
    password: "123",
    name: "SK",
  },
  {
    username: "harkirat@gmail.com",
    password: "456",
    name: "HS",
  },
  {
    username: "animesh@gmail.com",
    password: "789",
    name: "AVS",
  },
];

function userExists(username, password) {
  return ALL_USERS.find(
    (element) => element.username === username && element.password === password,
  );
}

app.use(express.json());

// Middleware for input schema validation
const validateInputSchema = (req, res, next) => {
  try {
    inputSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      msg: "Invalid request body",
      error: error.errors,
    });
  }
};

app.post("/signin", validateInputSchema, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (userExists(username, password) === undefined) {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }

  let token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json(ALL_USERS.filter((value) => value.username !== username));
  } catch (err) {
    res.status(403).json({
      msg: "Token invalid",
    });
  }
});

app.listen(3000);

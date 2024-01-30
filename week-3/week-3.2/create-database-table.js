require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "ovi" });
kitty.save().then(() => console.log("meow"));

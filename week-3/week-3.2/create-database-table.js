const mongoose = require("mongoose");
mongoose.connect();

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "persian" });
kitty.save().then(() => console.log("meow"));

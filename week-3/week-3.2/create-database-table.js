const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kabbophy:PLy9s6K2TQ978Wbu@cluster0.ufikomy.mongodb.net/animals",
);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "persian" });
kitty.save().then(() => console.log("meow"));

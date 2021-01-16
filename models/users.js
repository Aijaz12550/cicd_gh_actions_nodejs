const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    default: "test",
  },
});

module.exports = model("User", userSchema);

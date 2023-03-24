const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  matchesWon: { type: Number, default: 0 },
});



module.exports = mongoose.model("User", UserSchema, "users");
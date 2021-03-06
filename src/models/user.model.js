const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: false, default: "female" },
    master: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("user", userSchema);

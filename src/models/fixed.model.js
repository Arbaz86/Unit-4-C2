const mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Number, required: true },
    maturityDate: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("fixed", fixedSchema);

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Arbaz:Arbaz123@cluster0.4ccvj.mongodb.net/Bank?"
  );
};
module.exports = connect;

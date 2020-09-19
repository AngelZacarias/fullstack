const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },

  lastName: {
    type: String,

    required: true,
  },

  salary: {
    type: String,

    required: true,
  },

  date: {
    type: Date,

    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", EmpSchema);

module.exports = User;

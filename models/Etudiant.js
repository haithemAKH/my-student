const mongoose = require('mongoose');
const { model, Schema } = mongoose;

// Student schema
const StudentsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  }
});

module.exports = Students = model("Student", StudentsSchema);

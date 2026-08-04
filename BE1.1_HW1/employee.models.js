const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeName: String,
  designation: String,
  employeeId: Number,
  dob: Date,
  email: String,
  phoneNumber: Number,
  address: String,
  employeeProfileImageUrl: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;

const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeName: String,
  designation: String,
  employeeId: String,
  dob: Date,
  email: String,
  phoneNumber: String,
  address: String,
  employeeProfileImageUrl: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;

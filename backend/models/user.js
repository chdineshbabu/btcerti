const mongoose = require('mongoose');

const generatedCertificate = new mongoose.Schema({
  StudentName: String,
  enrollmentDate: String,
  courseTitle: String,
  studentEmail: String,
  certificateProvider: String,
  certificateId : String,
  issueDate:Date,
  verifiedStatus: Boolean,
  transactionHash:String,
  blockHash:String,
  blockNumber:String,
  from:String

  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);

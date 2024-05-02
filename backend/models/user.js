const mongoose = require('mongoose');

const generatedCertificate = new mongoose.Schema({
  studentName: String,
  enrollmentDate: String,
  courseTitle: String,
  studentEmail: String,
  courseEmail:String,
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
const certificate = mongoose.model('certificate', generatedCertificate);

module.exports = certificate

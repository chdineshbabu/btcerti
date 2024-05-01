const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://chdinesh4128:HLVqTPjec1qMGotG@cluster0.ijxrshd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;

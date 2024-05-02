const express = require('express');
const connectToMongoDB = require('./mongoConfig');
var cors = require('cors')
const bodyParser = require('body-parser');
var randomstring = require("randomstring");
var { enrollStudent } = require('./btc')
const certificate = require('./models/user');


const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(bodyParser.json());

connectToMongoDB();
var fileData = null;
app.post('/api/inputJson', (req, res) => {
    try {
        const data = req.body;

        if (!data) {
            console.log("No data found");
            res.status(400).send("No data found");
        } else {
            // console.log(data);
            fileData = data;
            res.send("Received the data");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
app.get('/api/verify', async (req, res) => {
    const checkRecords = await certificate.find()
    res.send(fileData)  
})
app.get('/api/verifyRec', async (req, res) => {
    const checkRecords = await certificate.find()
    res.send(checkRecords)
})
app.post('/api/generate', async (req, res) => {
    const { studentName, enrolledDate, courseTitle, studentEmail, certificateProvider } = req.body;
    const courseEmail = courseTitle + studentEmail
    try {
        const transactionResult = await enrollStudent(studentName, enrolledDate, courseTitle, studentEmail, certificateProvider);
        if (transactionResult) {  
            const certificateData = {
                studentName: studentName,
                enrolledDate: enrolledDate,
                courseTitle: courseTitle,
                studentEmail: studentEmail,
                courseEmail: courseEmail,
                certificateProvider: certificateProvider,
                certificateId: randomstring.generate(20),
                issueDate: new Date(),
                verifiedStatus: true,
                transactionHash: transactionResult.transactionHash,
                blockHash: transactionResult.blockHash,
                blockNumber: transactionResult.blockNumber,
                from: transactionResult.from
            };
            const existingCertificate = await certificate.findOne({ courseEmail });
            if (existingCertificate) {
                console.log('Certificate already exists for courseEmail:', existingCertificate.certificateId);
            } else {
                const newCertificate = await certificate.create(certificateData);
                console.log('Certificate data saved:', newCertificate);
            }
            res.status(200).json({ message: 'Certificate generated successfully', certificateData });
        } else {
            console.log('Transaction failed');
            res.status(500).json({ message: 'Transaction failed' });
        }

    } catch (error) {
        console.log("Error")
    }
});
app.post('/api/certificate', async(req,res)=>{
    const {id} = req.body
    console.log(id)
    const getCertificate = await certificate.findOne({certificateId:id})
    if(getCertificate){
        console.log("certificate Found")
        res.send(getCertificate)
    }else{
        res.send("No certificate found")
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const connectToMongoDB = require('./mongoConfig');
var cors = require('cors')
const bodyParser = require('body-parser'); 
var randomstring = require("randomstring");
var {enrollStudent} = require('./btc')


const app = express();
app.use(express.urlencoded({extended: false}))
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
app.get('/api/verify',(req,res)=>{
    res.send(fileData)
})
app.post('/api/generate', async(req, res) => {
    const { studentName, enrolledDate, courseTitle, studentEmail, certificateProvider } = req.body;
    const transactionResult = await enrollStudent(studentName, enrolledDate, courseTitle, studentEmail, certificateProvider);
    if(transactionResult){
        const { transactionHash, blockHash, blockNumber, from } = transactionResult;
        console.log(
            transactionHash, blockHash, blockNumber, from
        )
    }else{
        console.log("Transaction Failed")
    }
    const certificateData = {
        studentName: studentName,
        enrolledDate: enrolledDate,
        courseTitle: courseTitle,
        studentEmail: studentEmail,
        CertificateProvider: certificateProvider,
        certificateId: randomstring.generate(20),
        issueDate: new Date(),
        verifiedStatus: true,
        transactionHash: transactionResult.transactionHash,
        blockHash: transactionResult.blockHash,
        blockNumber: transactionResult.blockNumber,
        from: transactionResult.from
    };
    console.log('Received certificate data:', certificateData);
    res.status(200).json({ message: 'Certificate data received successfully' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

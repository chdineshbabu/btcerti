const express = require('express');
const connectToMongoDB = require('./mongoConfig');
var cors = require('cors')
const bodyParser = require('body-parser'); 


const app = express();
app.use(express.urlencoded({extended: false}))
app.use(cors())
 
app.use(bodyParser.json());


// connectToMongoDB();
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
            console.log(fileData)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error"); 
    }
});
app.get('/api/verify',(req,res)=>{
    res.send(fileData)
})
app.get('/api/generate',(req,res)=>{
    
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

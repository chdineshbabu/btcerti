const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');
const web3 = new Web3('http://127.0.0.1:7545');
const contractDataPath = path.resolve(__dirname, 'StudentEnrollment.json');
const contractData = JSON.parse(fs.readFileSync(contractDataPath));
const contractAbi = contractData.abi;
const contractAddress = '0x231D70bAc673EC706FC41C4BDA4FD1EF4dBa8442';
const stringStorageContract = new web3.eth.Contract(contractAbi, contractAddress);
const account = '0x3d031F82d5fB5Eef6A071d539E882c970bF5d315';
const privateKey = '0f657ddecdc38a82c04230d404514aaf461b45530a5be78795ef0dd558ed4473';
async function enrollStudent(studentName, courseTitle, studentEmail, certificateProvider, certificateId) {
    try {
        const contractFunction = stringStorageContract.methods.enrollStudent(
            studentName,
            courseTitle,
            studentEmail,
            certificateProvider,
            certificateId
        );
        const functionAbi = contractFunction.encodeABI();
        const gasPrice = await web3.eth.getGasPrice();
        const gasLimit = 300000;
        const nonce = await web3.eth.getTransactionCount(account);
        const tx = {
            from: account,
            to: contractAddress,
            gas: gasLimit,
            gasPrice: gasPrice,
            data: functionAbi,
            nonce: nonce
        };
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        return {
            transactionHash: receipt.transactionHash,
            blockHash: receipt.blockHash,
            blockNumber: receipt.blockNumber,
            from: receipt.from,
        };
    } catch (error) {
        console.error('Error enrolling student:', error);
    }
}

module.exports={enrollStudent}
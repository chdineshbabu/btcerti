var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
const fs = require('fs')
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
 
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "b0d1e387-1670-4dcb-af4e-88b830ede7be"
 
var api = new CloudmersiveConvertApiClient.ConvertDataApi()
 
var inputFile = fs.readFileSync("./te.xlsx");
 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.convertDataXlsxToJson(Buffer.from(inputFile.buffer), callback);

// 0x231D70bAc673EC706FC41C4BDA4FD1EF4dBa8442

// 0x8e92B918961100290bbb7637Af4E06DA75EcEeB6 -accout

// 0xf5284694860e253b680552b94a0ed63ae94677519f4e7dc84387986ee7b18876 -private Key

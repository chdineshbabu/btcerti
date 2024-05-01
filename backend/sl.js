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
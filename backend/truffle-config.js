var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    loc_certi_certi: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};

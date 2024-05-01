var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'truth joke mercy general solar sail robot party moral home street betray';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0", // Specify compiler version
    },
  },
};

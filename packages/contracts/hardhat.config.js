

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const fs = require('fs');



task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    kiiTestnet:{
      url: `https://a.sentry.testnet.kiivalidator.com:8645/`,
      accounts:  [process.env.WALLET_KEY],
      chainId: 123454321,
    },
    //goerli: {
      //url: "",
      //accounts: [ process.env.privateKey ]
    //}
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
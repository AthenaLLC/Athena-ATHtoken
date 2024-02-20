require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-contract-sizer");
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode"],
          "": ["ast"],
        },
      },
      viaIR: true,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: "https://bsc-mainnet.nodereal.io/v1/083880c5faac4d7ca5b451a403575f08",
        enabled: true,
      },
      throwOnTransactionFailures: false,
      loggingEnabled: true,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      timeout: 300000,
      accounts: "remote",
    },
    bsc: {
      url: "https://bsc-mainnet.nodereal.io/v1/083880c5faac4d7ca5b451a403575f08",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY],
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
    },
    core: {
      url: `https://bsc-dataseed.binance.org`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
    except: [
      "SafeMath",
      "strings",
      "Pool",
      "Ownable",
      "Address",
      "ERC20",
      "Strings",
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: process.env.BSC_TESTNET_API_KEY,
  },
  bscscan: {
    apiKey: process.env.BSC_TESTNET_API_KEY,
  },
};

# README.md for ATH Token GitHub Repository

## ATH Token

ATH Token is an ERC20 token designed for the Athena DexFi platform, featuring burnable and ownable capabilities. This document provides a comprehensive guide on how to initialize the project, compile the smart contract, deploy it using Hardhat, and set up the environment for successful deployment.

### Project Initialization

#### Prerequisites

- Node.js and npm installed. [Download here](https://nodejs.org/en/download/).
- An Ethereum wallet with a private key.
- An API key for BSC Testnet or Ethereum network from a service like [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/).

#### Steps

1. Clone the repository to your local machine.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd ATH-Token
```

3. Install the necessary dependencies.

```bash
npm install
```

### Smart Contract

The `ATHToken` smart contract is an ERC20 token with burnable and ownable functionalities. It initializes with a total supply of 10 million tokens minted to the specified address.

### Environment Setup

Create a `.env` file in the root of your project directory and add the following variables:

```plaintext
BSC_TESTNET_API_KEY = 'Your BSC Testnet or Ethereum API key here'
PRIVATE_KEY = 'Your wallet private key here'
```

Ensure you replace the placeholders with your actual API key and private key.

### Deployment with Hardhat

#### Compile the Contract

Before deploying, compile the `ATHToken` smart contract to generate the necessary artifacts.

```bash
npx hardhat compile
```

#### Deployment Script

The `scripts/deploy.js` script is provided for deploying the `ATHToken` smart contract. It takes one argument, the address to which the initial token supply will be minted.

#### Deploying to a Test Network

To deploy the `ATHToken` to a test network, follow these steps:

1. Modify the `hardhat.config.js` file to include your test network settings. For example, for the BSC Testnet:

```javascript
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        bsctestnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            accounts: [`0x${process.env.PRIVATE_KEY}`]
        }
    }
};
```

2. Run the deployment script specifying the network.

```bash
npx hardhat run scripts/deploy_ATHtoken.js --network bsctestnet
```

### Verifying the Contract

After deployment, the script will automatically verify the contract on the respective blockchain explorer to ensure transparency and authenticity. 

### Conclusion

This guide provided steps to initialize, compile, deploy, and verify the `ATHToken` smart contract using Hardhat. For further information or assistance, please refer to the [Hardhat documentation](https://hardhat.org/getting-started/).
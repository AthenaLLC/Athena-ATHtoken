const hre = require("hardhat");

async function main() {
  const deployContract = async (_name, _args) => {
    // Define and instance Contract Factory
    const ContractFactory = await hre.ethers.getContractFactory(_name);

    // Deploying contract with provided arguments
    const contract = _args ? await ContractFactory.deploy(..._args) : await ContractFactory.deploy();

    // Wait for the contract to be deployed
    await contract.deployed();
    console.log(`${_name} deployed to: ${contract.address}`);

    // Verify the contract
    try {
      await hre.run("verify:verify", {
        address: contract.address,
        constructorArguments: _args || [],
      });
      console.log(`${_name} verified on Etherscan`);
    } catch (error) {
      console.error(`${_name} verification failed:`, error.message);
    }

    return contract;
  };

  // Specify the constructor argument for ATHToken
  const athUserAddr = "0x64fC6D6343A1a0BA7D79174E86DD14bDDDa32B24";

  // Deploy and verify ATHToken
  await deployContract("ATHToken", [athUserAddr]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

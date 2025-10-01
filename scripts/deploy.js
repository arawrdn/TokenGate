const hre = require("hardhat");

async function main() {
  // Compile contracts (optional, Hardhat auto compiles)
  await hre.run("compile");

  // Get the contract factory
  const TokenGate = await hre.ethers.getContractFactory("TokenGate");

  // Deploy contract
  const tokenGate = await TokenGate.deploy();

  await tokenGate.deployed();

  console.log("TokenGate deployed to:", tokenGate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

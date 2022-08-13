const hre = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
  vaultAddress = "0x730bF3B67090511A64ABA060FbD2F7903536321E"
  console.log("Deploying myToken...")
  const myToken = await MyToken.deploy(uniswapRouterAddress, vaultAddress);
  console.log("waiting...")
  console.log("myToken launched at:", myToken.address);
  await myToken.deployed();
  console.log("myToken launched at:", myToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

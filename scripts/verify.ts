import { exec } from "child_process";

const el = process.env.EL;
const priceOracleEl = process.env.PRICE_ORACLE_EL;
const priceOracleEth = process.env.PRICE_ORACLE_ETH;
const assetTokenEl = process.env.ASSET_TOKEN_EL;
const assetTokenEth = process.env.ASSET_TOKEN_ETH;
const controller = process.env.CONTROLLER;
const network = process.env.NETWORK;

// Verify EL Token
exec(`yarn hardhat verify --network ${network} --constructor-args scripts/verifyArguments/testnetELVerify.js ${el}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Verify Controller
exec(`yarn hardhat verify --network ${network} ${controller}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Verify PriceOracleEL
exec(`yarn hardhat verify --network ${network} ${priceOracleEl}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Verify PriceOracleEth
exec(`yarn hardhat verify --network ${network} --constructor-args scripts/verifyArguments/EPriceOracleEthVerify.js ${priceOracleEth}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Verify AssetTokenEl
exec(`CONTROLLER=${controller} EL=${el} yarn hardhat verify --network ${network} --constructor-args scripts/verifyArguments/AssetTokenELVerify.js ${assetTokenEl}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Verify AssetTokenEth
exec(`CONTROLLER=${controller} yarn hardhat verify --network ${network} --constructor-args scripts/verifyArguments/AssetTokenEthVerify.js ${assetTokenEth}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
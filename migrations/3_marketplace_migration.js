const Token = artifacts.require("Kittycontract");
const Marketplace = artifacts.require("KittyMarketPlace");

module.exports = function (deployer) {
  deployer.deploy(Marketplace, Token.address);
};

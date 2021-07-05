const Migrations = artifacts.require("Migrations");
const BabyCoin = artifacts.require("BabyCoin");
const CatCoin = artifacts.require("CatCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BabyCoin ,'BabyCoin', 'BC', 3, 10000000000);
  deployer.deploy(CatCoin , 'CatCoin', 'CC', 3, 10000000000);
};

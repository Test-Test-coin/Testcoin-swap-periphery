const Router = artifacts.require("TestcoinSwapRouter.sol");
const WBNB = artifacts.require("WBNB.sol");

module.exports = async function (deployer, _network, addresses) {
  let wbnb;
  const FACTORY_ADDRESS = '0xC411450a4ab687cB1d4D77823704996C6439cebA';

  if(_network === 'mainnet'){
    weth = await WBNB.at('wbnbaddress');
  } else {
    await deployer.deploy(WBNB);
    wbnb = await WBNB.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
};

require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
// 配置gas估算插件
require('hardhat-gas-reporter')

const { ALCHEMY_API_KEY, PRIVATE_KEYS } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9', // solidity的编译版本
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEYS]
    }
  },
  gasReporter: {
    // 开启gas估算插件 设置人民币和gas费换算，也可以设置为美元 usd
    enabled: true,
    currency: 'USD',
    token: 'ETH',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  }
}

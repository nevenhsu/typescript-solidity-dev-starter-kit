require('dotenv').config()

import { HardhatUserConfig } from 'hardhat/types'

import 'hardhat-typechain'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-gas-reporter'
// import "solidity-coverage";

const CHAIN_ID = Number(process.env.CHAIN_ID) || undefined
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ''
const BLOCK_NUMBER = Number(process.env.BLOCK_NUMBER) || undefined
const INFURA_API_KEY = process.env.INFURA_API_KEY || ''
const RINKEBY_PRIVATE_KEY =
  process.env.RINKEBY_PRIVATE_KEY! ||
  '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3' // well known private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY // Obtain one at https://etherscan.io/

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [{ version: '0.6.8', settings: {} }],
  },
  networks: {
    hardhat: {
      chainId: CHAIN_ID,
      forking: {
        url: ALCHEMY_API_KEY,
        blockNumber: BLOCK_NUMBER,
      },
    },
    localhost: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    coverage: {
      url: 'http://127.0.0.1:8555', // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
  },
}

export default config

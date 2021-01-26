require('dotenv').config()
import { ethers } from 'ethers'

// open terminal, npm run node
// default provider: http:/\/localhost:8545
const provider = new ethers.providers.JsonRpcProvider()

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

example()

async function example() {
  const blockNumber = await provider.getBlockNumber()
  console.log(`blockNumber: ${blockNumber}`)
}

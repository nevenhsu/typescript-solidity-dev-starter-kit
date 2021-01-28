require('dotenv').config()

import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { Counter__factory, Counter } from './typechain'

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...

main()

async function main() {
  let counter: Counter
  const signers = await ethers.getSigners()
  const blockNumber = await ethers.provider.getBlockNumber()

  // 1
  const counterFactory = (await ethers.getContractFactory(
    'Counter',
    signers[0]
  )) as Counter__factory

  counter = await counterFactory.deploy()
  await counter.deployed()

  const initialCount = (await counter.getCount()).toString()
  const estimateGas = (await counter.estimateGas.getCount()).toString()

  console.log({
    address: counter.address,
    blockNumber,
    initialCount,
    estimateGas,
  })
}

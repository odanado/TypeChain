import { utils, ethers } from 'ethers'
import { DaiFactory } from '../types/ethers-contracts/DaiFactory'

const RPC_HOST = 'https://mainnet.infura.io/v3/6d6c70e65c77429482df5b64a4d0c943'
const DAI_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC_HOST)
  const dai = DaiFactory.connect(DAI_ADDRESS, provider)
  const balance = await dai.balanceOf('0x70b144972C5Ef6CB941A5379240B74239c418CD4')

  console.log(`Our DAI balance is: ${utils.formatEther(balance)}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

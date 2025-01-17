import { ChainId } from '@uniswap/sdk-core'

import { ExplorerDataType, getExplorerLink } from './getExplorerLink'

describe('#getExplorerLink', () => {
  it('correct for tx', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://etherscan.io/tx/abc')
  })
  it('correct for token', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TOKEN)).toEqual('https://etherscan.io/token/abc')
  })
  it('correct for address', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('unrecognized chain id defaults to mainnet', () => {
    expect(getExplorerLink(2, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('arbitrum', () => {
    expect(getExplorerLink(42161, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://arbiscan.io/address/abc')
  })
  it('bnb chain', () => {
    expect(getExplorerLink(ChainId.BNB, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://bscscan.com/address/abc')
  })
  it('polygon', () => {
    expect(getExplorerLink(137, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://polygonscan.com/address/abc')
  })
  it('scroll_alpha_testnet', () => {
    expect(getExplorerLink(534354, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://blockscout.scroll.io/address/abc')
  })
  it('base_goerli_testnet', () => {
    expect(getExplorerLink(84531, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://goerli.basescan.org/address/abc')
  })
  it('goerli', () => {
    expect(getExplorerLink(5, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://goerli.etherscan.io/address/abc')
  })
  it('avalanche', () => {
    expect(getExplorerLink(ChainId.AVALANCHE, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://snowtrace.io/address/abc'
    )
  })
  it('base', () => {
    expect(getExplorerLink(ChainId.BASE, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://basescan.org/address/abc')
  })
  it('base goerli', () => {
    expect(getExplorerLink(ChainId.BASE_GOERLI, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://goerli.basescan.org/address/abc'
    )
  })
})

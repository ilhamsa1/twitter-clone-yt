require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    goerly: {
      url: 'https://eth-goerli.g.alchemy.com/v2/n_3iOTilxoIoC-b82wN-VbCFFGd0BIoj',
      accounts: ['688a8491c4f82fce22d7acceb35f8a03f9790dcce8a5718866f3c23782cd39a2']
    },
    harmonyDev: {
      url: 'https://api.s0.ps.hmny.io',
      chainId: 1666900000,
      accounts: ['688a8491c4f82fce22d7acceb35f8a03f9790dcce8a5718866f3c23782cd39a2'],
    },
  },
}

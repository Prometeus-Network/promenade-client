import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0xdb404BF33c90b51176cA3db85288296B8594D134',
    sales: '0x19fD7C9B72cd944f987E0aB1FdD33fF8f68Cf87C', //Marketplace Proxy
    bundleSales: '0x0EeB6B95B52dfDFb86CcF960F8408a211555b63b', //Bundle Marketplace Proxy
    factory: '0x39B7788d6bb04d1860aaA6685F109aFD95D79Db3', //FantomNFTFactory
    privateFactory: '0x21CC778A6Ab21CBbB0ea62f0bFC7e6163C06dD75', //FantomNFTFactoryPrivate
    artFactory: '0x865AeDe044a707B9a3e127908Ad1F3f4F1086949',
    privateArtFactory: '0x1Ec3452a2A96AEd6A4513D6A036d17a6C3449551',
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0xFF0a1F5601c9157D05B4379AD9B507A0435f9C3d',
    sales: '0x059C8D0337DBA505665e701a720ec96Ac6Ee5d29',
    bundleSales: '0xA23E40AF5c6647B5Ccb9C83e0F4DA97bcb80B5De',
    factory: '0x77D8882A3C16B9456f59d879e152Eb5DAF2E29F9',
    privateFactory: '0xE721c871254C5eb7756F5E055EB01D826F865110',
  },
};

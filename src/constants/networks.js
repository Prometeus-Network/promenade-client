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
    auction: '0x9Ad6a97663D7876B3447E5381936eF2979c9FeDc',
    sales: '0x4100a787A4e1D3b6Bb5DfEaa9eb175D2A3617FdA', //Marketplace Proxy
    bundleSales: '0xB0D2E4332c18f4dADCAA7174112D6711cb55fb8f', //Bundle Marketplace Proxy
    factory: '0x519C9e35e476e157E0C6aA04128ff37Dd80A6E18', //FantomNFTFactory
    privateFactory: '0x2CF2b3bFbB7b5f019068b6c592087b05C1e5CB4A', //FantomNFTFactoryPrivate
    artFactory: '0x4c214E007bEb3d67F82115E361419af61bEC39f4',
    privateArtFactory: '0x01E610d8A168068eB7Cd5275f1Ab62317eB12Fc1',
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0xe69C7938543c15d6FCC26aB3D70548B0a49F6E58',
    sales: '0x6EAaB1e15C2a276f54c9239aE452A29df2148BEB',
    bundleSales: '0xA23E40AF5c6647B5Ccb9C83e0F4DA97bcb80B5De',
    factory: '0x77D8882A3C16B9456f59d879e152Eb5DAF2E29F9',
    privateFactory: '0xE721c871254C5eb7756F5E055EB01D826F865110',
  },
};

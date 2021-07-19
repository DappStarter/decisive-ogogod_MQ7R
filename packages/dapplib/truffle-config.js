require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember undo hunt derive suit giggle'; 
let testAccounts = [
"0x631d085f94537199cd50a8ee927fb91745d531afec7013ae79fbe926d6daf5f8",
"0x416f0b9a50f6909c2924b49a5752b0e1aeaf8d1a65c99da07789452bb3922488",
"0x86435527881180689b4fc5a697bfea91fc399194ae0c4667eff5e6798e345e53",
"0x9e07ac4f1f213f947d7766717977d3241f3976cc3375de9e9bf6871711003381",
"0xfafba99e9b62d9ba06c7dbdf3ad02efafd8f212ffb45101ba527a4a4e7b4229f",
"0xa14ba91da36e66c00b2ebcf10953eec63188a83b1b14ca6a3c74463b97284b39",
"0xbe5c4c3d5723c6e03cec7471d3b2f2bca1edde3ed7f7bcd221b63644349c5d49",
"0x6a53b0a2614314c0b213aaadbb2a8b0972b51a46bd94dc26eaac83dfc9c9c1b2",
"0xe76848f067f1a53c9abf08ffb15cba24abf3a1979129ba0b093a9b46c590daec",
"0x05228166d5e277cc981eb3e7ff0e594106ffd5ea97efeb68a7a99c3ba7910da8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



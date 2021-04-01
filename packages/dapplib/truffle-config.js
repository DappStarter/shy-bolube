require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure shadow walnut deny maze plastic coral light army gesture'; 
let testAccounts = [
"0x60a1d0b07bc60340c6dd9f1482dd8ddae0e0a2da2edc8d42a7e5e6909d4bc7e1",
"0xea9a4f1d411781ae834fb48dfe494448f4dca8e84988f9b6bf602f35194859d0",
"0x5b87ff46f0042121fa0e52697ab9b546d2f9eacae8b13228f9a82372fa35f138",
"0xc1cf489b6dc27d7358341f4ce86027e0f1cd27ede47eda10aaf75cb30dafdfd8",
"0x48790f78848c3682ebc5facd8e67d9242672e8437b2348bd8781625ae7739f8b",
"0x591ae47d9e24d88ed922793244808842a7b2e7194a410c3f020545db13058696",
"0x10c363414526f72459ad8e79d17fe8f3dbd97c61f535338735b6f158e87e0678",
"0xac38d4c2423befa6f703a8f49b9d17f092ced74c8f8330fb2653cc81dd970714",
"0x72a1ddc3aa05434afc1322cd9e9d87cd4b3128e0116b437f077a0873b5fa5cc9",
"0xd2800921be26512bc2407218f73323287c32745e7aee627f22fa9c7864dab88e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

import { Web3 } from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
import manuFactory from './build/manufacturerFactory.json' assert { type: "json" };

const { PHRASE, PROVIDER } = process.env;
const provider = new HDWalletProvider(
    "virtual enrich present soldier sense cheap strategy armed animal denial net suggest",
    "https://opt-sepolia.g.alchemy.com/v2/ZfW5FmNeK1qY_Ic1wllZyxrhkYtF7pW1"
);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('deploying from ', accounts[0]);
        const result = await new web3.eth.Contract(manuFactory.abi)
            .deploy({ data: manuFactory.evm.bytecode.object })
            .send({ from: accounts[0] });

        console.log(JSON.stringify(manuFactory.abi));
        console.log('contract deployed at ', result.options.address);
        provider.engine.stop();
    } catch (error) {
        console.error('Error deploying contract:', error);
        provider.engine.stop();
    }
};

deploy();
import path from 'path';
import fs from 'fs-extra'
import solc from 'solc';

/*const __dirname = path.dirname(new URL(import.meta.url).pathname);
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contractsPath = path.resolve(__dirname, 'contracts');
const fakeProdIdenPath = path.resolve(contractsPath, 'FakeProdIden.sol');
//const campaignPath = path.resolve(__dirname,'contracts','FakeProdIden.sol');
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const buildPath = path.resolve(__dirname, 'build');*/
fs.removeSync('build');
const source = fs.readFileSync('C:\\Users\\Shounak\\Desktop\\React-Fake-product-identification\\fake-product-identification\\ethereum\\contracts\\FakeProdIden.sol', 'utf-8');

const input = {
    language: 'Solidity',
    sources: {
        'FakeProdIden.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync('build');
for(let contract in output.contracts['FakeProdIden.sol'])
{
    fs.outputJSONSync(
        path.resolve('build', contract.replace(':', '') + '.json'),
        output.contracts['FakeProdIden.sol'][contract]
    );
}
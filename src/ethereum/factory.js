import web3 from './web3';
import manuFactory from './build/manufacturerFactory.json';

const instance = new web3.eth.Contract(
    manuFactory.abi,
    '0x46b1D8f936DAEaC4Eb60f1e324Ca0e173E5Adf3a'
);

export default instance;
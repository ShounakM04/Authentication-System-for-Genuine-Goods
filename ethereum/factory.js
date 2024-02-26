import web3 from './web3';
import manuFactory from './build/manufacturerFactory.json';

const instance = new web3.eth.Contract(
    manuFactory.abi,
    '0x920D8D60D1d456393186f02440ECACCC6B071e7b'
);

export default instance;
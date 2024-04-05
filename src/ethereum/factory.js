import web3 from "./web3";
import manuFactory from "./build/manufacturerFactory.json";

const instance = new web3.eth.Contract(
  manuFactory.abi,
  "0xEDeA338bAA049ecC761F3caFE66524836E577F59"
);

export default instance;

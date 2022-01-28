const Web3 = require('web3');

const Contract = require('web3-eth-contract');
const {ABI} = require('../utils/ABI');
Contract.setProvider(
  'https://ropsten.infura.io/v3/9518e0cb32ee448d9d84a0c25f7c1e2c'
);

const url = 'https://ropsten.infura.io/v3/9518e0cb32ee448d9d84a0c25f7c1e2c';
const web3 = new Web3(url);
const address = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';

const contract = new web3.eth.Contract(ABI, address);

export async function getGroupIds() {
  const res = await contract.methods.getGroupIds().call({from: address});
  return res;
}

export async function getGroup(id) {
  const res = await contract.methods.getGroup(id).call({from: address});
  return res;
}

export async function getIndex(id) {
  const res = await contract.methods.getIndex(id).call({from: address});
  return res;
}

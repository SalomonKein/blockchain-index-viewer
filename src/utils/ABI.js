export const ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    constant: true,
    inputs: [],
    name: 'getGroupIds',
    outputs: [{internalType: 'uint256[]', name: '', type: 'uint256[]'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'uint256', name: '_groupId', type: 'uint256'}],
    name: 'getGroup',
    outputs: [
      {internalType: 'string', name: 'name', type: 'string'},
      {internalType: 'uint256[]', name: 'indexes', type: 'uint256[]'},
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'uint256', name: '_indexId', type: 'uint256'}],
    name: 'getIndex',
    outputs: [
      {internalType: 'string', name: 'name', type: 'string'},
      {internalType: 'uint256', name: 'ethPriceInWei', type: 'uint256'},
      {internalType: 'uint256', name: 'usdPriceInCents', type: 'uint256'},
      {internalType: 'uint256', name: 'usdCapitalization', type: 'uint256'},
      {internalType: 'int256', name: 'percentageChange', type: 'int256'},
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

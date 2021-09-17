require('@babel/register');

module.exports = {
  compilers: {
    solc: {
      version: '0.5.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 500,
        },
        evmVersion: 'constantinople',
      },
    },
  },
  networks: {
    development: {
      host: '3.121.224.242',
      network_id: '31',
      port: 4444,
      gasPrice: 120000000,
      from: "0xd4bd721748adcbf6c48a55b590b9bf5bf70a7dfb"
    },
    test: {
      host: '127.0.0.1',
      network_id: '*',
      port: 8544,
    },
  },
};

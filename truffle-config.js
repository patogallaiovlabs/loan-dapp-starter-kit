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
      host: '127.0.0.1',
      network_id: '33',
      port: 4445,
      gasPrice: 60000000
    },
    test: {
      host: '127.0.0.1',
      network_id: '*',
      port: 8544,
    },
  },
};

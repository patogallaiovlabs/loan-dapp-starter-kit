# loan-dapp-starter-kit

This dapp is accompanied by a series of Medium articles to help developers get started with AZTEC.

DEMO: https://youtu.be/LRt1SKB2514

The code base is split into 3 main folders.

1. client (The frontend react code that interfaces with web3 and graph-ql)
2. contracts (The solidity contracts deployed to ganache that interact with AZTEC)
3. graph (The graph-node mappings that index the local blockchain)

<br />

This repo requires the following minimum versions installed in the developer enviroment:

`Truffle v5.0.12 (core: 5.0.12)`
<br />
<br />
`Solidity - 0.5.4 (solc-js)`
<br />
<br />
`Node v11.13.0`
<br />
<br />
`Web3.js v1.0.0-beta.37`
<br />
<br />
`Yarn - 1.15`
<br />
<br />
`Node Rskj - Synchronized with testnet (at least from block 2178053)`
<br />
<br />

### Getting started:

1. `git clone git@github.com:AztecProtocol/loan-dapp-starter-kit.git`

2. `cd loan-dapp-starter-kit`

3. `cp .env.test .env`

This copies the local file to a local .env file that ganache will use to deterministically create test accounts to make local development easier.


4. `yarn install`

5. `cd client && yarn install`

6. Start the graph node: `yarn graph-start`

7. Deploy the graph-node mappings to the graph-node: `yarn graph-deploy`

7. In a new terminal window `yarn graph-deploy` 
  - (this step is only requiered for the FIRST time)

8. In this new terminal window `yarn client-start`
  - This command will run the create-react-app and host the client at localhost:3000

9. Navigate to http://localhost:3000 and click the create account button. Save the seed phrase, the private key and the address.

10. With that address, go to https://faucet.rsk.co/ , to add some funds to this account.

11. Next, we have to add the account to the node (for the purpose of this DEMO, we have use the account management of the node to send transactions, in future proposal could be replace by a personal wallet). In order to do that we can do a POST like this:

```
{
    "jsonrpc": "2.0",
    "method": "personal_newAccountWithSeed",
    "params": ["cube learn hawk valley ..."],
    "id": 1
}
```

12. Repeat 10 and 11, as many times as you like to add new accounts and start playing with each other!

Enjoy!

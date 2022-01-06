const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {interface, bytecode} = require("./compile");

const provider = new HDWalletProvider(
    "tent entire notable kingdom van truth yellow drastic weasel depart road card",
    "https://rinkeby.infura.io/v3/9c8382acc6924d9eb3ce9dd8d24ce282",
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log("deploying from this account:", accounts[0])
    
    const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments : ["Deploying"]})
    .send({from: accounts[0], gas: "1000000"});

    console.log("Contract deploy to", inbox.options.address);
};

deploy();


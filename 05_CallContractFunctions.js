
const { Console } = require('console');
const Web3 = require('web3');  //import web3 library 

const rpcUrl = "https://rinkeby.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";  // process.env.INFURA_MAINNET_URL get particular address from .env file

const web3 = new Web3(rpcUrl);  //now web is the instance now we call each function of web3 using WEB3

const TX = require("ethereumjs-tx").Transaction;

const Account = '0x9803CC075d4520f8Ea76201893EE133DAeA55B47'; //  Owners account
const Account_private_key = Buffer.from("52bee26900c3fbd19bc1af7616c0292825ea349e3ab49fb6b6262da561003e00","hex");
//Private key of senders address
const abi = require('./ABIs/DemoContract.json'); // abi file of deployed contract


//const CalledMethod2 =  Contract.methods.decrement().encodeABI();

const Contract_Address = '0x2E2f8B72e25d6E4E8eb7B2136eB5b563B84dD660';     //address of deployed contract

const Contract = new web3.eth.Contract(abi,Contract_Address);   //to interact with smart contract using its abi and Contract address

const CalledMethod1 =  Contract.methods.Increment().encodeABI(); // contract -> methods -> call increment function -> then convert it into ABI
//const CalledMethod2 =  Contract.methods.decrement().encodeABI();


const CallContract =async ()=>{

    try {

        const txNonce = await web3.eth.getTransactionCount(Account);   //Nonce of previous transaction of this particular address

        const txObj={
            nonce : web3.utils.toHex(txNonce),  //here we first convert transacion nonce to hex and then assign to nonce
            to:Contract_Address,  // contract address         
            // amount sender want to send 
            gasLimit : web3.utils.toHex(1000000),//max gas consumed by the transaction 
            gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei')),// this is the amount we want to pay for each unit of gas. I'll use 10 Gwei here
            data :  CalledMethod1   //which method we can to call
        }

        const tx = new TX(txObj,{'chain':'rinkeby'}); // transafer all the details to another variable
        tx.sign(Account_private_key); // here we sign our transaction with the private key 

        const serializedTx = tx.serialize();  //here we serialize the transaction so we transafer it to web3

        const raw = '0x'+ serializedTx.toString('hex'); // here first we convert convert serialize tx to string and then transfer it to a variable

        const response =await web3.eth.sendSignedTransaction(raw); // now assign the while transaction to the variable so we can get transaction address

        console.log("hash is :" ,response);
        
    } catch (e) {

        console.log(e);
        
    }

}

const readConstFunction = async ()=>{
    try {

        const response = await Contract.methods.getCounter().call();
        console.log("counter is :",response);
        
    } catch (e) {
        console.log(e);
    }
}

CallContract();
//readConstFunction();



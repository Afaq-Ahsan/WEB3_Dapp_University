
const { Console } = require('console');
const Web3 = require('web3');  //import web3 library 

const rpcUrl = "https://ropsten.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";  // process.env.INFURA_MAINNET_URL get particular address from .env file

const web3 = new Web3(rpcUrl);  //now web is the instance now we call each function of web3 using WEB3

const TX = require("ethereumjs-tx").Transaction;


const Sender_Address = "0x9803CC075d4520f8Ea76201893EE133DAeA55B47";
const Reciever_Address = "0x4882dC0662DF0ee370BA97Cbb86a45ceD716E53F";
const senders_private_key = Buffer.from("52bee26900c3fbd19bc1af7616c0292825ea349e3ab49fb6b6262da561003e00","hex");

const TransferEth = async ()=>{
    try {

    const txNonce =await web3.eth.getTransactionCount(Sender_Address); //gets the nonce of previous transaction of senders address

          const txObj={
              nonce : web3.utils.toHex(txNonce),
              to:Reciever_Address,         
              value:web3.utils.toHex(web3.utils.toWei('2','ether')), // amount sender want to send 
              gasLimit : web3.utils.toHex(21000),//max gas consumed by the transaction it always consumed 21000
              gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei'))// this is the amount we want to pay for each unit of gas. I'll use 10 Gwei here
          }

          const tx = new TX(txObj,{'chain':'ropsten'}); // transafer all the details to another variable
          tx.sign(senders_private_key); // here we sign our transaction with the private key 

          const serializedTx = tx.serialize();  //here we serialize the transaction so we transafer it to web3

          const raw = '0x'+ serializedTx.toString('hex'); // here first we convert convert serialize tx to string and then transfer it to a variable

          const response =await web3.eth.sendSignedTransaction(raw); // now assign the while transaction to the variable so we can get transaction address

          console.log("hash is :" ,response);

        
    } catch (e) {

        console.log(e);
        
    }
}

TransferEth();


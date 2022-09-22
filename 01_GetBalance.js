//require('dotenv').config();     //like a library which import .env file 
                               //   .env file is file which hold private info
const Web3 = require('web3');  //import web3 library 

const rpcUrl = "https://ropsten.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";  // process.env.INFURA_MAINNET_URL get particular address from .env file

const web3 = new Web3(rpcUrl);  //now web is the instance now we call each function of web3 using WEB3

const AccountToCheckBalance = "0x9803CC075d4520f8Ea76201893EE133DAeA55B47";  // any random deployed contract address

//step 1  simple

 web3.eth.getBalance(AccountToCheckBalance, (err, wei) => {
   //  if(!err){
   const  balance = web3.utils.fromWei(wei, 'ether');
     console.log("Get Balance with out Async",balance);//}
   //  else{
         console.log("Error :", err);
   //  }
   });


//step 2  using Async function

   const getBalanceAsync =async ()=>{
 try {
   const Wei = await web3.eth.getBalance(AccountToCheckBalance);  //get balance 
   const balance = web3.utils.fromWei(Wei,'ether'); //here we will convert wei to ethers 
   console.log("Async Balance",balance);
 } catch (e) { 
  console.log("error",e);   
 }

 }

getBalanceAsync();

console.log("end");
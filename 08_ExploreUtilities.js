const Web3 = require('web3');  //import web3 library 

const rpcUrl = "https://mainnet.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";  // process.env.INFURA_MAINNET_URL get particular address from .env file

const _ = require('underscore');

const web3 = new Web3(rpcUrl);  //now web is the instance now we call each function of web3 using WEB3
//1

const getAverageGasPrice =async ()=>{

    try {
        const gasPrice = await web3.eth.getGasPrice();
       // const wei = web3.utils.fromWei(gasPrice,'ether');
        const wei = web3.utils.fromWei(gasPrice,'gwei');
        console.log("Gas Price is",wei);
    } catch (e) {

        console.log("ERROR IS",e)
        
    }

}

const generateHash = (StringToEncode)=>{
    try {
        console.log('SHA3',web3.utils.sha3(StringToEncode));
        console.log('KECCAK',web3.utils.keccak256(StringToEncode));
    } catch (e) {
        console.log(e);
        
    }
}

const generateRandomHEX = (bytes)=>{
    try {
           console.log("Random byte is",web3.utils.randomHex(bytes));    
    } catch (e) {
        console.log(e);
        
    }
}
//underscoreJS is a library where is number of functions are given so we can use that functions 
//in our upcomming projects it is very helpful
const useUNderScoreLibrary=()=>{
    console.log('is value contained ?', _.contains([1,2,3],2));
    console.log('is value contained ?', _.contains([1,2,3],4));
}

//getAverageGasPrice();
//generateHash("AFAQ");
//enerateRandomHEX(2);
useUNderScoreLibrary();
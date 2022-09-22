const Web3 = require('web3');  //import web3 library 

const rpcUrl = "https://mainnet.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";  // process.env.INFURA_MAINNET_URL get particular address from .env file

const web3 = new Web3(rpcUrl);  //now web is the instance now we call each function of web3 using WEB3
//1

//get the latest block number 
const getLatestBlockNumber =async ()=>{
    try {

        const blockNumber = await web3.eth.getBlockNumber();   // get the current blocknumber of ethereum 
        console.log("blockNumber is",blockNumber);
        console.log("********************************************");
        console.log("############################################");
        console.log("********************************************");
    } catch (e) {

        console.log(e);
        
    }
}
//get the full information of current block
//2
const getLatestBlock =async ()=>{
    try {

        const block = await web3.eth.getBlock('latest');   // get the current block information of ethereum 
        console.log("blockNumber is",block);
        console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
        console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
    } catch (e) {

        console.log(e);
        
    }
}
//3
//gets the lastest blocks 
const getLastBlocks =async (Count)=>{
    try {
        const latestBlock = await web3.eth.getBlockNumber(); 
        for (let i = 0; i < Count; i++) {
           const block = await web3.eth.getBlock(latestBlock - i);
           console.log("BlockNumber | Hash",`${block.number} | ${block.hash}`);
                
       }
       
    } catch (e) {

        console.log(e);
        
    }
}


getLatestBlockNumber();
getLatestBlock();

getLastBlocks(5);
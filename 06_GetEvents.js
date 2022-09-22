const Web3 = require('web3'); 

const { Contract } = require('web3-eth-contract');

const rpcUrl = "https://rinkeby.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";

const web3 = new Web3(rpcUrl); 

const abi = require('./ABIs/Uni.json');

const AccountToCheckBalance = "0x508D953f337bF5A4ea94FAeFA3dC554074f2d05b";

const contract = new web3.eth.Contract(abi,AccountToCheckBalance);


const getEvents = async ()=>{
    try {

        const events = await contract.getPastEvents('AllEvents',{'fromBlock': 10786985 ,'toBlock':'latest'})
        //const events = await contract.getPastEvents('Approval',{'fromBlock': 10786985 ,'toBlock':'latest'})
        //const events = await contract.getPastEvents('Transfer',{'fromBlock': 10786985 ,'toBlock':'latest'}) 
        //send me all the events of approval from 13256800 to latestBlock 

       // console.log("events count",events[0]);
       console.log("events count",events);
        console.log("**************************");
        //console.log("events count",events[1]);
        //console.log("events length is",events.length);
        
    } catch (e) {

        console.log(e);
        
    }
}
getEvents();
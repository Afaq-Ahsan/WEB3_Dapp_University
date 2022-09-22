const Web3 = require('web3'); 
const { Contract } = require('web3-eth-contract');

const rpcUrl = "https://mainnet.infura.io/v3/0293dd4d29544a01aa5b8a2198039eec";

const web3 = new Web3(rpcUrl);  

const AccountToCheckBalance = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"; //any particular account address

const abi = require('./ABIs/Uni.json');            //copy abi file of a particular token and save it in a seperate file
                                                  // and then import it

const contract = new web3.eth.Contract(abi,AccountToCheckBalance);  

const tokenHolderAddress = "0x7D2d43E63666f45B40316b44212325625DbAEB40";

const ReadContract = async ()=>{
    try {
        
           const TokenName =await contract.methods.name().call();   //goto the contract->methods of that 
                                                                    //contract->get the name of that token
                                                                    //->then call it
           console.log("Name :", TokenName);

           const Tokenssymbol = await contract.methods.symbol().call();           //gets the symbol
           console.log("symbol : ",Tokenssymbol);

           const TokensTotalSupply = await contract.methods.totalSupply().call();  //gets the totalsupply
           console.log("TotalSupply : ",TokensTotalSupply);

           const TokenDecimals = await contract.methods.decimals().call();
           console.log("decimals is",TokenDecimals);
           const AccountBalance = await contract.methods.balanceOf(tokenHolderAddress).call(); //gets the balance of the particular address
           console.log("Account balance is :",AccountBalance);

    } catch (e) {
        console.log("Error : ",e)
        
    }
}

ReadContract();
console.log("end");


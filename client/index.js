var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xF9e8f3D28d4C0849558cCA37E3b447BCbEE392bf"; // get your contract address

$(document).ready(function(){
    // to enable to use MetaMask 
    window.ethereum.enable().then(function(accounts){
        user = accounts[0];
        instance = new web3.eth.Contract(abi, contractAddress, {from: user}); // or {from: accounts[0]} // abi: application binary interface
        
        console.log(instance);

        // listner for the Birth event
        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#kittyCreation").css("display", "block");
            $("#kittyCreation").text("owner:" + owner
                                    + "kittyId:" + kittenId
                                    + "mumId:" + mumId
                                    + "dadId:" + dadId
                                    + "genes:" + genes)
        })
    })
})

function createKitty(){
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(err)
            console.log(err);
        else 
            console.log(txHash);
        
    })
}

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xBab0623D43a36b980Ed4356C603950809afA4A06"; // get your contract address

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

async function getKitties(){
    var arrayId;
    var kitty;
    try{
        arrayId = await instance.methods.getKittyByOwner(user).call();
    } catch(err){
        console.log(err);
    }

    for (i =0; i< arrayId.length; i++){
        kitty = await instance.methods.getKitty(arrayId[i]).call();
        appendCat(kitty[0], i);
    }
    console.log(kitty);
}

var     Tx = require('ethereumjs-tx')
var     util = require('ethereumjs-util')
var     Web3 = require('web3');

var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545')) ;

if(!web3.isConnected()) {
    console.log("Cannot connect to web3 provider.");
}

window.mysendpayment = function(prikey,toaddr,amnt,nonce,gasprice,gaslimit) {

   var privatekey = new Buffer(prikey,'hex') ; 
   var btoaddr    = new Buffer(toaddr,'hex') ; 
   weiamnt        =  web3.toHex(web3.toWei(amnt, 'ether')) ;

   var rawtx = {
     gasPrice: gasprice,
     gasLimit: gaslimit,
     to: btoaddr,
     nonce: nonce,
     value: weiamnt,
     data: ''
    } ; 

    // var result = web3.eth.estimateGas(rawtx) ; 
    // console.log(result) ;

    var tx = new Tx(rawtx);
    tx.sign(privatekey);

    var serializedtx = tx.serialize();
    var sertx = serializedtx.toString('hex');
    
    // submit transaction  
    web3.eth.sendRawTransaction("0x"+sertx) ;
    console.log("Tx submitted:" + sertx) ;

    return(sertx);
}

function mygetaddr(prikey) {

    var privatekey = new Buffer(prikey, 'hex') ;
    var publickey = util.privateToPublic(privatekey)
    return(util.publicToAddress(publickey).toString('hex')) ; 
}

window.mygetnoncegas = function(prikey) {

   var params  = new Object() ; 

   params.gasprice    = web3.toHex(web3.eth.gasPrice) ;
   var latestblock    = web3.eth.getBlock("latest") ;
   params.gaslimit    = web3.toHex(latestblock.gasLimit) ; 
   var addr           = mygetaddr(prikey) ; 
   addr               = "0x" + addr.toString('hex')
   params.nonce       = web3.eth.getTransactionCount(addr) ;
   console.log(params.nonce) ; 
   return(params) ; 
}

// input 
//prikey = "4be358b5432eb802731ab1067585d756a77308afff722d2254badc526896a7c6" ;
//toaddr = "c5d2ab882a4f0566bbdc08c894b572e1343c263d" ; 
//amnt   =  '2' ;

//prms = mygetnoncegas(prikey) ; 

//sertx = mysendpayment(prikey,toaddr,amnt,prms.nonce,prms.gasprice,prms.gaslimit) ; 
//console.log(sertx) ; 

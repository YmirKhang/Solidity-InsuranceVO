var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

if (!web3.isConnected()) {
    console.log("not connected");
}
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

window.getDateFunc = function() {
    var abi=[{"constant": false,"inputs": [],"name": "reimbursePremium","outputs": [],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "requiredCustomer","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "isActive","outputs": [{"name": "","type": "bool"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "payPremium","outputs": [],"payable": true,"type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"}],"name": "transferVote","outputs": [],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "hospitalCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "proposalID","type": "uint256"},{"name": "choice","type": "bool"}],"name": "customerVote","outputs": [],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "patient_Adress","type": "address"},{"name": "tDescription","type": "bytes32"},{"name": "tCost","type": "uint256"}],"name": "requestPayment","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "numberOfProposal","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "votePercentAccept","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "treatments","outputs": [{"name": "hospitalAdress","type": "address"},{"name": "customerAdress","type": "address"},{"name": "cost","type": "uint256"},{"name": "date","type": "uint256"},{"name": "description","type": "bytes32"},{"name": "isPaid","type": "bool"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "fundingPeriod","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "description","type": "bytes32"},{"name": "amountService","type": "uint256"}],"name": "propose","outputs": [],"payable": true,"type": "function"},{"constant": false,"inputs": [],"name": "reimburseMe","outputs": [],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "checkThreshold","outputs": [],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "treatmentCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "customerThreshold","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "showHosV","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "showActive","outputs": [{"name": "","type": "bool"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "customerCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "isDead","outputs": [{"name": "","type": "bool"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "requiredHospital","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "reimburseBalance","outputs": [{"name": "retval","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "hospitalAdress","type": "address"}],"name": "startServe","outputs": [],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "requestServe","outputs": [],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "proposalID","type": "uint256"}],"name": "checkRequirements","outputs": [{"name": "","type": "bool"}],"payable": false,"type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "arrProposals","outputs": [{"name": "link","type": "bytes32"},{"name": "voteCount","type": "uint256"},{"name": "proposalID","type": "uint256"},{"name": "amountOfService","type": "uint256"},{"name": "voteEnd","type": "uint256"},{"name": "yesVotes","type": "uint256"},{"name": "isValid","type": "bool"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "reimburseDeposit","outputs": [],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "deposit","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [{"name": "tCount","type": "uint256"}],"name": "approvePayment","outputs": [],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "premium","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": false,"inputs": [],"name": "showVotes","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "votePercentLimit","outputs": [{"name": "","type": "uint256"}],"payable": false,"type": "function"},{"inputs": [],"payable": false,"type": "constructor"}];
    var contractaddress="0xE26619c6B86e164b263a6Fe8fFB342eb297052BA"
    var contract =  web3.eth.contract(abi).at(contractaddress);
    var date = contract.fundingPeriod.call();
    var dateFormatted = new Date(date.toNumber()*1000);
    return(dateFormatted);
}


/*
//    Create    application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(express.static('.'));

app.get('/sayhello', function(req, res) {
    res.setHeader('Content-Type ', 'application/json');
    res.send(JSON.stringify("hello world"));
});
app.get('/getlatestblock', function(req, res) {
    res.setHeader('Content -Type ', 'application/json');
    var rblock = retlatestblock();
    res.send(JSON.stringify(rblock));
});
app.get('/getbalance/:addr', function(req, res) {
    res.setHeader('Content-Type ', 'application/json');
    var bal = retbalance(req.params["addr"]);
    res.send(JSON.stringify(bal));
});
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example    app    listening    at    http://%s:%s", host, port)
})
*/
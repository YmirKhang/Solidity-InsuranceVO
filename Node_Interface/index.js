function retlatestblock() {
    var latbno = web3.eth.blockNumber;
    var block;
    latbno = web3.eth.blockNumber;
    block = web3.eth.getBlock(latbno);
    return (block);
}

function retbalance(addr) {
    var balance = web3.fromWei(web3.eth.getBalance(addr));
    return (balance);
}

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
if (!web3.isConnected()) {
    console.log("not connected");
}
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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
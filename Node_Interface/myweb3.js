var abi=[
  {
    "constant": false,
    "inputs": [],
    "name": "reimbursePremium",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "requiredCustomer",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isActive",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "payPremium",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferVote",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "hospitalCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalID",
        "type": "uint256"
      },
      {
        "name": "choice",
        "type": "bool"
      }
    ],
    "name": "customerVote",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "patient_Adress",
        "type": "address"
      },
      {
        "name": "tDescription",
        "type": "bytes32"
      },
      {
        "name": "tCost",
        "type": "uint256"
      }
    ],
    "name": "requestPayment",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numberOfProposal",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "votePercentAccept",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "treatments",
    "outputs": [
      {
        "name": "hospitalAdress",
        "type": "address"
      },
      {
        "name": "customerAdress",
        "type": "address"
      },
      {
        "name": "cost",
        "type": "uint256"
      },
      {
        "name": "date",
        "type": "uint256"
      },
      {
        "name": "description",
        "type": "bytes32"
      },
      {
        "name": "isPaid",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fundingPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "description",
        "type": "bytes32"
      },
      {
        "name": "amountService",
        "type": "uint256"
      }
    ],
    "name": "propose",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "reimburseMe",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "checkThreshold",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "treatmentCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "customerThreshold",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "showHosV",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "showActive",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "customerCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "isDead",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "requiredHospital",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "reimburseBalance",
    "outputs": [
      {
        "name": "retval",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "hospitalAdress",
        "type": "address"
      }
    ],
    "name": "startServe",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "requestServe",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalID",
        "type": "uint256"
      }
    ],
    "name": "checkRequirements",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "arrProposals",
    "outputs": [
      {
        "name": "link",
        "type": "bytes32"
      },
      {
        "name": "voteCount",
        "type": "uint256"
      },
      {
        "name": "proposalID",
        "type": "uint256"
      },
      {
        "name": "amountOfService",
        "type": "uint256"
      },
      {
        "name": "voteEnd",
        "type": "uint256"
      },
      {
        "name": "yesVotes",
        "type": "uint256"
      },
      {
        "name": "isValid",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "reimburseDeposit",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "deposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tCount",
        "type": "uint256"
      }
    ],
    "name": "approvePayment",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "premium",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "showVotes",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "votePercentLimit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  }
];
var Web3 = require('web3');
var web3 = new Web3();

var contractaddress="0xd14f98Fde4F6Dfdf2F3Bbe3C4d8AE7BD15eA3a61";
var contract =  web3.eth.contract(abi).at(contractaddress);


web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545')) ;

if(!web3.isConnected()) {
    console.log("Cannot connect to web3 provider.");
}

window.mycallcontract = function(fromaddr,password,argno,amnt,gasamnt) {

   web3.personal.unlockAccount(fromaddr,password,5);

   var abi = [{"constant":true,"inputs":[],"name":"numpayments","outputs":[{"name":"","type":"uint256"}],
              "payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],
              "name":"addno","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],
              "name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
              {"payable":false,"type":"fallback"}] ;

   var contractaddress = "0xf9fa744e90c03e1ad2bef305f5883fde46f60769" ;
   var contract = web3.eth.contract(abi).at(contractaddress);
   rc = contract.addno(argno,{from: fromaddr, value: web3.toWei(amnt, "ether"), gas:900000}) ;
   return(rc) ; 
}

window.getDateFunc = function() {

    var date = contract.fundingPeriod.call();
    var dateFormatted = new Date(date.toNumber()*1000);
    return(dateFormatted);
}

window.premiumFunc = function(fromaddr, password){
	 web3.personal.unlockAccount(fromaddr,password,5);
	 var rc = contract.payPremium.sendTransaction({from:fromaddr,to:contractaddress,value:web3.toWei(20,'ether'),gas:212730});
	 return(rc);
}


window.proposeFunc = function(link, fromaddr, password, amnt){
	web3.personal.unlockAccount(fromaddr,password,5);
	contract.propose(link ,web3.toWei(amnt,'ether'),{value:web3.toWei(5,'ether'),from:fromaddr,to:contractaddress});
}

window.transferFunc = function(fromaddr, toaddr, password){
    web3.personal.unlockAccount(fromaddr,password,5); 
	var rc = contract.transferVote(toaddr,{from:fromaddr});
	return(rc);
}

window.voteProp = function(fromaddr, proposalID, password, choice){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.customerVote(proposalID,choice,{from:fromaddr});
}

window.requestHostServe = function(fromaddr, password){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.requestServe({from:fromaddr});
}

window.reimbursePremiumFunc = function(fromaddr, password){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.reimbursePremium({from:fromaddr});	
}

window.reimburseDepositF = function(fromaddr, password){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.reimburseDeposit({from:fromaddr});	
}

window.reimburseMeFunc = function(fromaddr, password){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.reimburseMe({from:fromaddr});	
}
window.requestPayFunc =function(fromaddr, password, desription, cost, patientAdr){
	web3.personal.unlockAccount(fromaddr,password,5); 
	var res=contract.requestPayment(patientAdr, desription , web3.toWei(cost ,'ether'),{from:fromaddr});
	return(res);
}
window.approvePayFunc = function(fromaddr, password, treatID){
	web3.personal.unlockAccount(fromaddr,password,5); 
	contract.approvePayment(treatID,{from:fromaddr});
}

window.proposalListF =function(){
	//web3.personal.unlockAccount(fromaddr,password,5); 
	var res = contract.numberOfProposal.call();
	
	var proposalList=[];
	for(i=0; i<res.toNumber() ; i++){
  	proposalList.push(contract.arrProposals.call(i));
  	proposalList[i][0]= web3.toUtf8(proposalList[i][0]);
	}
	return(proposalList);

}

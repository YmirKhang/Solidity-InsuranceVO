var Web3=require('web3');
var testabi=[
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
var finalabi=[
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
var testaddress="0xE26619c6B86e164b263a6Fe8fFB342eb297052BA";
var finaladdress="0xd14f98Fde4F6Dfdf2F3Bbe3C4d8AE7BD15eA3a61";
var web=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contractfinal=web.eth.contract(finalabi).at(finaladdress);
var contracttest=web.eth.contract(testabi).at(testaddress);

/*
Replace them with your account addresses.
*/
var ad1="0x54669de299f8b893514f2d23acebc26ea8428976";
var ad2="0x04DA4268EF85Bc9DCBCD25a57C5B5c58C3c11FEe";
var ad3="0x795F9C1E006281d49f0578c7Ff34f8B615bA5Ae6";
var ad4="0x000619fB964fB137eD2f8D9FC0B598bb36eED11F";
var adHos = "0xB1136Ef7Cb6d4887F04554d5cF852E055D57eAa2";
var adHos1="0x7521d64A1De866e36E326dE6A18Acf431ff55Da6";
web.personal.unlockAccount(ad1,your_passwd);
web.personal.unlockAccount(ad2,your_passwd);
web.personal.unlockAccount(adHos,your_passwd);
web.personal.unlockAccount(ad3,your_passwd);
web.personal.unlockAccount(ad4,your_passwd);
web.personal.unlockAccount(adHos1,your_passwd);


/*
First run payPremium and propose for customer and hospital at the same time. 
*/
//contract.payPremium.sendTransaction({from:ad2,to:testaddress,value:web.toWei(10,'ether'),gas:212730});
//contract.payPremium.sendTransaction({from:ad1,to:testaddress,value:web.toWei(10,'ether'),gas:212730});
//contract.payPremium.sendTransaction({from:ad3,to:testaddress,value:web.toWei(10,'ether'),gas:212730});
//contract.payPremium.sendTransaction({from:ad4,to:testaddress,value:web.toWei(10,'ether'),gas:212730});
//contract.propose("link1",web.toWei(500,'ether'),{value:web.toWei(5,'ether'),from:adHos,to:testaddress});
//contract.propose("link2",web.toWei(300,'ether'),{value:web.toWei(5,'ether'),from:adHos1,to:testaddress});



//This function is for transfering votes.
//contract.transferVote(ad2,{from:ad1});



//  After first payments are mined, run voting functions.
/*
contract.customerVote(1,true,{from:ad1});
contract.customerVote(1,false,{from:ad2});
contract.customerVote(0,true,{from:ad3});
contract.customerVote(0,true,{from:ad1});
contract.customerVote(0,true,{from:ad2});
contract.customerVote(1,false,{from:ad3});
contract.customerVote(0,false,{from:ad4});
contract.customerVote(1,true,{from:ad4});
*/


// After voting, hospitals serve request.
//contract.requestServe({from:adHos1});
//contract.requestServe({from:adHos});

// If service fails, reimburses account manually.
//contract.reimbursePremium({from:ad1});
//contract.reimbursePremium({from:ad2});
//contract.reimbursePremium({from:ad3});
//contract.reimbursePremium({from:ad4});

//After starting service, customer requests payment.
//var res=contract.requestPayment(ad1,'bobrek nakli',web.toWei(4,'ether'),{from:adHos1});
//var res=contract.approvePayment(0,{from:ad1});



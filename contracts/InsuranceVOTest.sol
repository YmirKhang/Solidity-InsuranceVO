pragma solidity ^0.4.10;

contract InsuranceVO{
//Mapping for hospial address to proposal id.
mapping(address=>uint) mapProposals;
//Mapping for customer address to reimbursement value.
mapping(address=>uint) mapReimbursements;
//Mapping for the adress to the hospital instance
mapping(address=>Hospital) mapHospitals;
//Default value of the deposit that the hospital gives.
mapping(address=>Customer) mapCustomers;

uint public deposit;
//Default valuo of the premium price in Ethers.
uint public premium;
//Counter for the proposal ids.
uint public numberOfProposal;
uint public customerThreshold;
uint public votePercentLimit;
uint public votePercentAccept;
uint public customerCount;
bool public isActive;
uint public hospitalCount;
uint public treatmentCount;
uint public fundingPeriod;
uint public requiredHospital;
uint public requiredCustomer;
/*
Structure for customer. It holds premium duration, validity, total votes and eligibility
for voting.
*/
struct Customer{
  uint endPremium;
  mapping(uint=>bool) mapHospitalVotes;
  uint weight;
  bool isValid;
}
//Holds all mapCustomers.
struct Treatment{
  address hospitalAdress;
  address customerAdress;
  uint cost;
  uint date;
  bytes32 description;
  bool isPaid;
}
Treatment[] public treatments;
struct Hospital{

  uint amountOfService;
  bytes32[] invoices;
  bytes32 proposalLink;

}

struct Proposal{
  bytes32 link;
  uint voteCount;
  uint proposalID;
  uint amountOfService;
  uint voteEnd;
  uint yesVotes;
  bool isValid;
}
//Proposal array.
Proposal[] public arrProposals;
//Constructor of contract.
function InsuranceVO(){
  deposit=5 ether;
  premium=10 ether;
  numberOfProposal=0;
  votePercentAccept = 65;
  votePercentLimit = 35;
  customerThreshold=1000;
  customerCount=0;
  isActive=false;
  hospitalCount=0;
  treatmentCount=0;
  fundingPeriod=now+15 minutes;
  requiredCustomer=2;
  requiredHospital=1;

}

function checkThreshold(){
  if(customerCount>=1000){
  votePercentLimit=25;
  }
}

// Pays premium values.
function payPremium() public payable{

if(msg.value<premium){
  throw;
}
//Checks if not customer.

if((mapCustomers[msg.sender]).isValid){
  if((mapCustomers[msg.sender]).endPremium>now){
    throw;
    }else{
//mapCustomers whose premium date is expired. Renews his insurance.
    mapCustomers[msg.sender].endPremium=now+365 days;
    mapReimbursements[msg.sender]=msg.value-premium;
    }
}else{
  if(fundingPeriod>now){
    mapCustomers[msg.sender]=Customer({endPremium:fundingPeriod+365 days,isValid:true,weight:1});
  }else{
    mapCustomers[msg.sender]=Customer({endPremium:now+365 days,isValid:true,weight:1});
}
  customerCount++;
  mapReimbursements[msg.sender]=msg.value-premium;

  }
  if(!isActive && now<fundingPeriod){
    if(hospitalCount>=requiredHospital && customerCount>=requiredCustomer){
      isActive=true;

    }
  }
  checkThreshold();

}
//Reimburses a customer. If premium paid more, Customer invokes this method to get his money back.
function reimburseMe() public {
  uint amnt;
  amnt=mapReimbursements[msg.sender];
  if(amnt>0){
    mapReimbursements[msg.sender]=0;
    if(!msg.sender.send(amnt)){
      mapReimbursements[msg.sender]=amnt;
    }
  }
}

function reimbursePremium() public{
  if(!mapCustomers[msg.sender].isValid){
    throw;
  }
  if(!isActive && now>fundingPeriod){
    mapCustomers[msg.sender].isValid=false;
    if(!msg.sender.send(premium)){
      mapCustomers[msg.sender].isValid=true;
    }

  }


}



//Repays the customer if paid more.
/*
@return: reimbursed amount of customer.
*/
function reimburseBalance() constant public returns(uint retval){
  return (mapReimbursements[msg.sender]);

}
/*
Offer function for hospitals.
@Param: description of proposal.
@Param: duration of insurance service offered by hospital.
*/
function propose(bytes32 description,uint amountService)public payable{
  if(msg.value<deposit){
    throw;
}
  //mapReimbursements[msg.sender] += deposit;
  mapProposals[msg.sender]=numberOfProposal;
  arrProposals.push(Proposal({isValid:true,yesVotes:0,link:description,proposalID:numberOfProposal,voteCount:0,amountOfService:amountService,voteEnd:now + 7 days}));
  numberOfProposal++;
//Deposit should be implemented
}

function requestServe() public{
//Buraya da hastane invoke atacak, eğer voting period bitmişse proposal için
//Yeni hospital olştur adresle maple vs.
 uint index = mapProposals[msg.sender];
 Proposal p= arrProposals[index];

    if (p.voteCount > (customerCount*votePercentLimit)/100) {
      if (p.yesVotes > (p.voteCount*votePercentAccept)/100) {
        startServe(msg.sender);
      }

  }

}


function reimburseDeposit()public{

  uint index = mapProposals[msg.sender];
  Proposal p= arrProposals[index];
  if(p.isValid && p.voteEnd<now){
    mapReimbursements[msg.sender]+=deposit;
    p.isValid=false;
  }

}



function startServe(address hospitalAdress){
  uint index = mapProposals[msg.sender];
  Proposal p= arrProposals[index];
  bytes32[] memory tem;
  mapHospitals[hospitalAdress]=Hospital({amountOfService: p.amountOfService,proposalLink:p.link,invoices: tem});
  hospitalCount++;
  if(!isActive && now<fundingPeriod){
    if(hospitalCount>=requiredHospital && customerCount>=requiredCustomer){
      isActive=true;

    }
  }
}



//Bu kısımda düzeltilmesi gerekenler:
//1.Msg gönderenin customer olup olmadığına bakılmalı. customer değilse başta throw
//2.Customerın bu proposal için oy kullandığı tutulmalı ya proposalın içinde ya customerın içinde
//Bence proposal içinde tutmak daha mantıklı çünkü sonsuza kadar tutulması gereken bir şey değil proposal silinince gitsin :D
//Selametle
function customerVote(uint proposalID, bool choice) public{
  if(checkRequirements(proposalID)){
    throw;
  }
  Customer c=mapCustomers[msg.sender];
  if(c.weight==0){
    throw;
  }

  if(c.mapHospitalVotes[proposalID]){
    throw;
  }
  arrProposals[proposalID].voteCount+=c.weight;
  if(choice){
    arrProposals[proposalID].yesVotes+=c.weight;
    c.mapHospitalVotes[proposalID]=true;
  }

}

function checkRequirements(uint proposalID) returns(bool){
  return arrProposals[proposalID].voteEnd<now;
}

/*
Transfers votes;
*/
function transferVote(address to)public{
  Customer c=mapCustomers[msg.sender];
  if(c.weight==0){
    throw;
  }

  if(!mapCustomers[to].isValid){
    throw;
  }
  Customer c1=mapCustomers[to];
  mapCustomers[to].weight+=1;
  mapCustomers[msg.sender].weight-=1;
}
function showVotes()public returns(uint){
  if(!mapCustomers[msg.sender].isValid){
    return 0;
  }
  return mapCustomers[msg.sender].weight;
}
function showHosV()public returns(uint){
     uint index = mapProposals[msg.sender];
    Proposal p= arrProposals[index];
    return p.yesVotes;
}

function requestPayment(address patient_Adress, bytes32 tDescription,uint tCost) public returns(uint){
  if(!isActive && now<fundingPeriod){
    if(hospitalCount>=requiredHospital && customerCount>=requiredCustomer){
      isActive=true;

    }
  }
  if(isActive){
    treatments.push(Treatment({isPaid:false,hospitalAdress:msg.sender,customerAdress:patient_Adress,cost:tCost,date:now,description:tDescription}));
    treatmentCount++;
    return treatmentCount-1;
  }
  return 0;
}


function approvePayment(uint tCount) public{

    if(treatments[tCount].isPaid){
      throw;
    }
    if(msg.sender!=treatments[tCount].customerAdress){
      throw;
    }

    if(treatments[tCount].hospitalAdress.send(treatments[tCount].cost)){
      if(mapHospitals[treatments[tCount].hospitalAdress].amountOfService<treatments[tCount].cost){
        delete mapHospitals[treatments[tCount].hospitalAdress];
      }else{
      mapHospitals[treatments[tCount].hospitalAdress].amountOfService-=treatments[tCount].cost;
      treatments[tCount].isPaid=true;
    }

    }

}



function showActive() public returns (bool){
  return isActive;
}
function isDead()public returns (bool){
  return (!isActive && now>fundingPeriod);
}
}

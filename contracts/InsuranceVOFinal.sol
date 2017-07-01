pragma solidity ^0.4.10;

/**
* This is the InsuranceVO contract
*/

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
//Default value of the premium price in Ethers.
uint public premium;
//Counter for the proposal ids.
uint public numberOfProposal;
// The threshold for the customer count for the vote limits to change.
uint public customerThreshold;
// The threshold for the proposal to hold to be evaluated
uint public votePercentLimit;
// The threshold for the proposal to have as Yes to be passed as a Hospital.
uint public votePercentAccept;
// Counts the customers
uint public customerCount;
// If the contract is fueled in the funding
bool public isActive;
// Holds he count for the activeHospitals
uint public hospitalCount;
// Counter for the treatment IDs
uint public treatmentCount;
// Holds the date for the funding to end.
uint public fundingPeriod;
// Holds the required hospital number for the contract to be fueled.
uint public requiredHospital;
// Holds the premium buyers for the contract to be fueled.
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
/*
Structure for the treatment. It holds the description link, the cost, the hospital making the treatment
and the customer that is treated. It also holds a bool isPaid to prevent duplicate payments.
*/
struct Treatment{
  address hospitalAdress;
  address customerAdress;
  uint cost;
  uint date;
  bytes32 description;
  bool isPaid;
}
//The array that holds the treatments.
Treatment[] public treatments;
//The struct for the hospital that has passed the proposal voting period. It holds the hospitals proposal link,,
// and the amount of service in ethers is provided.
struct Hospital{

  uint amountOfService;
  bytes32[] invoices;
  bytes32 proposalLink;

}
//The struct for the proposals that are proposed by the hospitals,
// It holds the proposal link voteCount and yesCounts to be evaluated. 
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
  premium=20 ether;
  numberOfProposal=0;
  votePercentAccept = 65;
  votePercentLimit = 35;
  customerThreshold=1000;
  customerCount=0;
  isActive=false;
  hospitalCount=0;
  treatmentCount=0;
  fundingPeriod=now+30 days;
  requiredCustomer=10;
  requiredHospital=2;

}

//If the premium buyers extend beyond 1000 the votePercentLimit is reevluted.
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

//Reimburses a customer that has paid in the funding period
//and the funding is not fueled.
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

mapProposals[msg.sender]=numberOfProposal;
arrProposals.push(Proposal({isValid:true,yesVotes:0,link:description,proposalID:numberOfProposal,voteCount:0,amountOfService:amountService,voteEnd:now + 7 days}));
numberOfProposal++;
//Deposit should be implemented
}

//The request that is invoked by the hospital to start serving
//Checks if the proposal of the hospital has enough votes and yesvotes.
//invokes the startServe function if its successfull
function requestServe() public{
  uint index = mapProposals[msg.sender];
  Proposal p= arrProposals[index];

  if (p.voteCount > (customerCount*votePercentLimit)/100) {
    if (p.yesVotes > (p.voteCount*votePercentAccept)/100) {
      startServe(msg.sender);
    }

  }

}

//Reimburses the hospitals that have passed the voting period
//both succcessfully or not.
function reimburseDeposit()public{

  uint index = mapProposals[msg.sender];
  Proposal p= arrProposals[index];
  if(p.isValid && p.voteEnd<now){
    mapReimbursements[msg.sender]+=deposit;
    p.isValid=false;
  }

}

//Create a new hospital struct with the given adress of proposal
// And check if the system is fueled.
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



//This is the voting function for the customer.
//If the customer already voted to a given proposal it throws.
//Adds the weight of the customer to the votes.
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

// Checks if the proposals ending period is passed or not.

function checkRequirements(uint proposalID) returns(bool){
return arrProposals[proposalID].voteEnd<now;
}

/*
Transfers votes, but gives only 1 weight everytime it is invoked.
If customer has 0 weight it throws.
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

//Just a function to see a customers vote count.
function showVotes()public returns(uint){
if(!mapCustomers[msg.sender].isValid){
return 0;
}
return mapCustomers[msg.sender].weight;
}

//Just a logging code fot the hospitals votes.
function showHosV()public returns(uint){
uint index = mapProposals[msg.sender];
Proposal p= arrProposals[index];
return p.yesVotes;
}

//If a customer takes a treatment, this function is invoked by the hospital. 
// It prepares a treatment invoice with given cost and description and returns the treatment id.
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

//If there is a treatment with the given tCount. And the sender of the message is the patient of the treatment
//The system send the hospital the required cost for the treatment and makes the isPaid true.
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
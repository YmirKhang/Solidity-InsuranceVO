		

**CMPE 483 BLOCKCHAIN PROGRAMMING**

**PROJECT 2**

**REPORT OF INSURANCEVO**

**Emirhan Karagül - 2013400057**

**Mehmet Doğan - 2012400189**

**Kayahan Taşyaran - 2012400174**

**1. INTRODUCTION**

In this project we have implemented a decentralized autonomous organisation, which serves as a crowdfunded health insurance service, operated and governed by users and the contract and the hospitals. The organisation is named InsuranceVO and will run on Ethereum Network. The service is distributed on many nodes in the blockchain network, storing consensus on every node on the network, the system will be secure and invulnerable to attacks. The insurance organisation will serve in a first come first serve manner.

**2. MODELS**

**	**In this project our insurance model is based on hospitals and users:

* Users buy premium to gain 1 voting weight.

* User can transfer their vote weight to others users.

* Hospitals can propose including a proposal link, amount of service and by depositing 5 ethers.

* Hospital proposals will be voted in 7 days. If they are voted by 35% of the users and have yes votes by 65% of the users they can request to start serve.

* If hospitals are not voted for service they can reimburse their deposits.

* If there are 10 users and 2 hospitals in the system after the voting perios which is 30 days, the system starts, the system can start before the funding period if the requirement meet.

* If the system isn’t fueled after the funding period, users and hospitals can reimburse.

* After the funding period, the hospitals and users start to use the services.

* If a user is treated by a hospital, the hospital can prepare a treatment including the adress of the hospital, the adress of the user the cost and the invoice and the treatment ID.

* If the user accepts the treatment. The user can approve it by the treatment ID. And the cost of the treatment is automatically sent to the hospital.

* If the amount of service of a hospital is consumed. The hospital is sent the amount of the treatment and the hospital is deleted from the system.

* Users can buy another premium after their premium period ends.

**3. IMPLEMENTATION**

**	**The implementation of InsuranceVO is documented under the InsuranceVOFinal.sol. All the functions that are used for the elements that are described in the models section is documented in the code. The functions of the InsuranceVO checks the validity of hospitals and customers before making any transactions. All the hospitals and the customers are kept in the memory by the Mappings in the contract. The treatments and proposals are declared public and can seen by anybody.

**4. CONTRACT CALLS**

* **function InsuranceVO():**

This is the constructor of the contract it sets the default values in the contract, and globals like votePercentLimits and isActive.

* **function checkThreshold():**

This is the method to check if the contract has over 1000 users. If the contract has over 1000 users it sets the votePercentLimit to 25.

* **function payPremium() public payable:**

This is the method for the user to buy premium. If the value of the message is greater or equal than the premium price; the premium is bought by the user and the excess value is mapped to the reimbursements. Else the function throws.

* **function reimburseMe() public:**

This method is invoked by te hospitals or the users in order to get the excess ethers sent to the contract back. If the transaction is not successful it doesn’t change the mapped reimburse value.

* **function reimbursePremium() public:**

If the funding period has ended and the contract failed to be fueled. The users who bought premiums can withdraw their moneys back by invoking this method.

* **function reimburseBalance() constant public returns(uint retval):**

Shows the amount to be reimbursed to the sender of the message.

* **function propose(bytes32 description,uint amountService)public payable:**

Invoked by the hospital to send a proposal to the system. If the message doesn’t have the deposit value(5 Ether) the method throws. Else it creates a new proposal and keeps it in an array.

* **function requestServe() public:**

Invoked by the hospital to request to start serving for the system. If the votes for the hospitals proposal meet the requirements this function calls the startServe() method.

* **function reimburseDeposit()public:**

Called by the hospital to withdraw the deposit for the proposals. Only pays the amount back if the time has passed the voting preiod of the proposal.

* **function startServe(address hospitalAdress):**

If the requirements hold this method is called by the contract with the adress of the sender. The hospital instance for the sender will be created and all the values will be assigned from the proposal. This method also checks if the contract is fueled.

* **function customerVote(uint proposalID, bool choice) public:**

The function for the voters to vote on a proporsals. If the coice is true, the yesVotes is also incremented. If the customers already voted for the given ProposalID the function throws.

* **function transferVote(address to)public:**

Function to implement liquid democracy, the caller of this method gives one of his/her vote weight to the adress to.

* **function requestPayment(address patient_Adress, bytes32 tDescription,uint tCost) public returns(uint):**

This function is called by the hospital, when it gives a treatment to a customer, with the parameters of description of treatment, the cost, and adress of the patient. It creates a treatment instance with the given parameters and the date it is creates. It then returns the id of the treatment instance.

* **function approvePayment(uint tCount) public:**

This function is called by the patient after the requestPayment is invoked by the payment. If the caller of this method is the treatments patient adress. The payment is validated and sent to the hospital. The treatment holds an isPaid in itself to prevent multiple payments.

* **function isDead()public returns (bool):**

This function returns true if the contract failed to be fueled before the funding period. 


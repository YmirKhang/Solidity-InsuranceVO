var InsuranceVO=artifacts.require("./contracts/InsuranceVO");
contract('./contracts/InsuranceVO',function(accounts){
  var sender=accounts[0];
  var receiver=accounts[1];

  it("Display premium correctly",function(done){
  InsuranceVO.new().then(
    function(prem){
      prem.premium.call().then(
        function(premiu){
        
         assert.equal(premiu["c"][0],500000,"premiums not equal");
         done();
      });
      
    });
  });


  it("Display deposit correctly",function(done){
  InsuranceVO.new().then(
    function(depo){
      depo.deposit.call().then(
        function(dep){
         assert.equal(dep["c"][0],50000,"deposits not equal");
         done();
      });
      
    });
  });
  it("Pays premium correctly",function(done){



    done();
  });


});
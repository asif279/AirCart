document.getElementById("caseIncrease").addEventListener("click",function(){
    handleProductPrice(true);
    });
    document.getElementById("caseDecrease").addEventListener("click",function(){
    
        handleProductPrice(false);
        });
    
        function handleProductPrice(isIncrease){
    
            var caseInput= document.getElementById("case-count");
            var caseCount = parseInt(caseInput.value);
    
                var caseNewCount = caseCount;
                if(isIncrease == true ){
                    caseNewCount =caseCount +1;
                }
                else if(isIncrease == false && caseNewCount>0 ){
                    caseNewCount =caseCount - 1;
                }
    caseInput.value= caseNewCount;

    calculateCost ();
        };
    
        document.getElementById("increase").addEventListener("click",function(){
           productPrice1(true);
            });
            document.getElementById("decrease").addEventListener("click",function(){
            
                productPrice1(false);
                });
                function productPrice1(isIncrease1){
    
                    var caseInput= document.getElementById("case-count1");
                    var caseCount = parseInt(caseInput.value);
            
                        var caseNewCount = caseCount;
                        if(isIncrease1 == true ){
                            caseNewCount = caseCount + 1;
                        }
                        else if(isIncrease1 == false && caseNewCount > 0 ){
                            caseNewCount =caseCount - 1;
                        }
                        caseInput.value= caseNewCount;
    calculateCost ();
                };
    
    
                function calculateCost (){
    
                    var phone = document.getElementById("case-count");
                    var phoneCount = parseInt(phone.value);
    
                    var case1 = document.getElementById("case-count1");
                    var phoneCount1 = parseInt(case1.value);
    
                    var totalPrice = phoneCount *150 + phoneCount1 *100;
                 const totalWithoutTax=    document.getElementById("col1").innerHTML = "$" + totalPrice;
    
                    var extraTax = totalPrice * 0.1; 
                    var Tax= document.getElementById("taxation").innerHTML = "$" + extraTax;
                                  
                     var totalBill = totalPrice - extraTax; 
                    var total = document.getElementById("totalAmount").innerText = "$" + totalBill;
    
    
                }
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
    
        document.getElementById("caseIncrease1").addEventListener("click",function(){
            handleProductPrice1(true);
            });
            document.getElementById("caseDecrease1").addEventListener("click",function(){
            
                handleProductPrice1(false);
                });
                function handleProductPrice1(isIncrease){
    
                    var caseInput= document.getElementById("case-count1");
                    var caseCount = parseInt(caseInput.value);
            
                        var caseNewCount = caseCount;
                        if(isIncrease == true ){
                            caseNewCount =caseCount +1;
                        }
                        else if(isIncrease == false && caseNewCount>0 ){
                            caseNewCount =caseCount - 1;
                        }
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
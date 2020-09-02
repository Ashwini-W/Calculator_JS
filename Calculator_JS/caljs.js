

window.onload=function(){
console.log("working");



var operator=document.querySelectorAll(".operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        alert("the operator clicked "+this.id);
       
        if (this.id=="clearall"){  //for the clear button
          printHistory("")  
          printResult("")  
          
        }




        else{  // for the operators *,+,-,/
            var output=getResult();  
            var history = getHistory();   


           if (output!=""){
            history=history+output;



                if(this.id=="="){
                    var result=eval(history);
                    printResult(result)
                    printHistory("")
                }
                else{
                    history=history+this.id;
                    printResult("")
                    printHistory(history)
                }

           }
        }
    });
}

var number=document.querySelectorAll(".number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        alert("the number clicked "+this.id);
        var output=getResult();    
        if (output!=NaN){    
            output=output+=this.id;
            printResult(output)  
        }
        
        

    });
}


function getHistory(){
    var history=document.getElementById("history").innerText; 
    return history;
}
function printHistory(num){
    var printhistory_=document.getElementById("history"); 
    printhistory_.innerText=num;

} 


function getResult(){
    var result=document.getElementById("result").innerText; 
  
    return result;
}

function printResult(num){
    if (num==""){
        document.getElementById("result").innerText=num;
    }
    else{
    var printresult_=document.getElementById("result"); 
    printresult_.innerText=num;
    }
    
}


}






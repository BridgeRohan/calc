function operate(){
    let a=prompt("enter a number");
    let b=prompt("enter operation");
    if(b==="+"){
        addition(a);
    }
    else if(b==="-"){
        subtract(a);
    }
    else if(b==="*"){
        multiply(a);
    }
    else if(b==="/"){
        divide(a);
    }
    
}
function addition(a){
    let c=prompt("enter number");
    alert(+a+ +c);
}
function subtract(a){
    let c=prompt("enter number");
    alert(+a- +c);
}
function multiply(a){
    let c=prompt("enter number");
    alert(+a* +c);
}
function divide(a){
    let c=prompt("enter number");
    if(c==="0"){
        alert("ERROR")
        return;
    }
    alert(+a/ +c);
}
operate();
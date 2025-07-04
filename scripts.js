function operate(){
    let a="";
    document.querySelectorAll(".num").forEach(function(tap){
        tap.addEventListener("click",function(event){
        a+=event.target.innerHTML;
        document.getElementById("prim").innerHTML=a;
        })
    })
    document.querySelector(".del").addEventListener("click",function(){
        if(a.length!==0){
            a=a.substring(0,a.length-1);
            document.getElementById("prim").innerHTML=a;
        }
    })
    document.querySelector(".div").addEventListener("click",function(){
        
        divide(a);
    });
    document.querySelector(".mul").addEventListener("click",function(){
        
        multiply(a);
    });
    document.querySelector(".sub").addEventListener("click",function(){
        
        subtract(a);
    });
    document.querySelector(".add").addEventListener("click",function(){
        
        addition(a);
    });

    
}
function addition(a){
    if(a.length===0){
        return;
    }
    document.getElementById("sec").innerText=a+"+";
    document.getElementById("prim").innerText=0;
    let c="";
    document.querySelectorAll(".num").forEach(function(tap){
        tap.addEventListener("click",function(event){
        c+=event.target.innerHTML;
        document.getElementById("prim").innerHTML=c;
        })
    })
    document.querySelector(".eq").addEventListener("click",function(){
        document.getElementById("prim").innerHTML=+c + +a;
        document.getElementById("sec").innerText=a+"+"+c;
    })
    
}
function subtract(a){
    if(a.length===0){
        return;
    }
    document.getElementById("sec").innerText=a+"-";
    document.getElementById("prim").innerText=0;
    let c="";
    document.querySelectorAll(".num").forEach(function(tap){
        tap.addEventListener("click",function(event){
        c+=event.target.innerHTML;
        document.getElementById("prim").innerHTML=c;
        })
    })
    document.querySelector(".eq").addEventListener("click",function(){
        document.getElementById("prim").innerHTML=+a - +c;
        document.getElementById("sec").innerText=a+"+"+c;
    })
}
function multiply(a){
    if(a.length===0){
        return;
    }
    document.getElementById("sec").innerText=a+"×";
    document.getElementById("prim").innerText=0;
    let c="";
    document.querySelectorAll(".num").forEach(function(tap){
        tap.addEventListener("click",function(event){
        c+=event.target.innerHTML;
        document.getElementById("prim").innerHTML=c;
        })
    })
    document.querySelector(".eq").addEventListener("click",function(){
        document.getElementById("prim").innerHTML=+a * +c;
        document.getElementById("sec").innerText=a+"+"+c;
    })
}
function divide(a){
    if(a.length===0){
        return;
    }
    document.getElementById("sec").innerText=a+"÷";
    document.getElementById("prim").innerText=0;
    let c="";
    document.querySelectorAll(".num").forEach(function(tap){
        tap.addEventListener("click",function(event){
        c+=event.target.innerHTML;
        document.getElementById("prim").innerHTML=c;
        })
    })
    
    document.querySelector(".eq").addEventListener("click",function(){
        if(c==="0"*c.length){
        document.getElementById("prim").innerHTML="ERROR";
        return;
        }
        document.getElementById("prim").innerHTML=+a / +c;
        document.getElementById("sec").innerText=a+"+"+c;
    })

}
operate();
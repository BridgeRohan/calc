let a = "";
let b = "";
let operator = "";

document.addEventListener("keydown", function(event){
    const key = event.key;
    // Number or dot input
    if((("0"<=key && "9">=key) || key==="." )&& !operator){
        if(key === "." && a.includes(".")) return;
        a+=key;
        document.getElementById("prim").innerHTML = a;
    }
    else if((("0"<=key && "9">=key) || key==="." )&& operator){
        if(key === "." && b.includes(".")) return;
        b+=key;
        document.getElementById("prim").innerHTML = b;
    }
    // Negative number input
    else if(key==="-" && a.length===0){
        a+=key;
        document.getElementById("prim").innerHTML = a;
    }
    else if(key==="-" && operator && b.length===0){
        b+=key;
        document.getElementById("prim").innerHTML = b;
    }
    // Backspace
    else if (key === "Backspace") {
        if (!operator && a.length !== 0) {
            a = a.substring(0, a.length-1);
            document.getElementById("prim").innerHTML = a;
        } else if (operator && b.length !== 0) {
            b = b.substring(0, b.length-1);
            document.getElementById("prim").innerHTML = b;
        }
    }
    // Clear (Escape)
    else if (key === "Escape") {
        a = "";
        b = "";
        operator = "";
        document.getElementById("prim").innerHTML = 0;
        document.getElementById("sec").innerHTML = "";
    }
    // Addition
    else if (key === "+") {
        if (a.length === 0 || a==="-") return;
        if(a.length!==0 && b.length!==0 && operator){
            if(b==="-") return;
            let result;
            if (operator === "+") result = +a + +b;
            if (operator === "-") result = +a - +b;
            if (operator === "×") result = +a * +b;
            if (operator === "÷") {
                if (+b === 0) {
                    result = "ERROR";
                } else {
                    result = +a / +b;
                }
            }
            a=result;
            b="";
            document.getElementById("sec").innerText = a + "+";
            document.getElementById("prim").innerText = 0;
        }    
        operator = "+";
        document.getElementById("sec").innerText = a + "+";
        document.getElementById("prim").innerText = 0;
    }
    // Subtraction
    else if (key === "-") {
        if(a==="-"){
            return;
        }
        if (a.length === 0){
            a+="-";
            document.getElementById("prim").innerText = a;
            return;
        }
        if (operator && b.length === 0){
            b+="-";
            document.getElementById("prim").innerText = b;
            return;
        }
        if(a.length!==0 && b.length!==0 && operator){
            if(b==="-") return;
            let result;
            if (operator === "+") result = +a + +b;
            if (operator === "-") result = +a - +b;
            if (operator === "×") result = +a * +b;
            if (operator === "÷") {
                if (+b === 0) {
                    result = "ERROR";
                } else {
                    result = +a / +b;
                }
            }
            a=result;
            b="";
            document.getElementById("sec").innerText = a + "-";
            document.getElementById("prim").innerText = 0;
        }
        operator = "-";
        document.getElementById("sec").innerText = a + "-";
        document.getElementById("prim").innerText = 0;
    }
    // Multiplication
    else if (key === "*" || key === "x" || key === "X") {
        if (a.length === 0 || a==="-") return;
        if(a.length!==0 && b.length!==0 && operator){
            if(b==="-") return;
            let result;
            if (operator === "+") result = +a + +b;
            if (operator === "-") result = +a - +b;
            if (operator === "×") result = +a * +b;
            if (operator === "÷") {
                if (+b === 0) {
                    result = "ERROR";
                } else {
                    result = +a / +b;
                }
            }
            a=result;
            b="";
            document.getElementById("sec").innerText = a + "×";
            document.getElementById("prim").innerText = 0;
        }
        operator = "×";
        document.getElementById("sec").innerText = a + "×";
        document.getElementById("prim").innerText = 0;
    }
    // Division
    else if (key === "/") {
        if (a.length === 0 || a==="-") return;
        if(a.length!==0 && b.length!==0 && operator){
            if(b==="-") return;
            let result;
            if (operator === "+") result = +a + +b;
            if (operator === "-") result = +a - +b;
            if (operator === "×") result = +a * +b;
            if (operator === "÷") {
                if (+b === 0) {
                    result = "ERROR";
                } else {
                    result = +a / +b;
                }
            }
            if(result==="ERROR"){
                a = "";
                b = "";
                operator = "";
                document.getElementById("sec").innerText ="";
                document.getElementById("prim").innerText = "ERROR";
                return;
            }
            a=result;
            b="";
            document.getElementById("sec").innerText = a + "÷";
            document.getElementById("prim").innerText = 0;
        }
        operator = "÷";
        document.getElementById("sec").innerText = a + "÷";
        document.getElementById("prim").innerText = 0;
    }
    // Equals (Enter or =)
    else if (key === "Enter" || key === "=") {
        if(b==="-" || a==="-") return;
        if (a.length === 0 || b.length === 0 || !operator) return;
        let result;
        if (operator === "+") result = +a + +b;
        if (operator === "-") result = +a - +b;
        if (operator === "×") result = +a * +b;
        if (operator === "÷") {
            if (+b === 0) {
                result = "ERROR";
            } else {
                result = +a / +b;
            }
        }
        document.getElementById("prim").innerHTML = result;
        document.getElementById("sec").innerText = a + operator + b;
        a = result === "ERROR" ? "" : result.toString();
        b = "";
        operator = "";
    }
});

document.querySelector(".clear").addEventListener("click",function(){
    a = "";
    b = "";
    operator = "";
    document.getElementById("prim").innerHTML = 0;
    document.getElementById("sec").innerHTML = "";
});
document.querySelectorAll(".num").forEach(function(tap){
    tap.addEventListener("click",function(event){
        if (!operator) {
            if(event.target.getAttribute("id")==="dot") {
                if (a.includes(".")) return;
            }
            a += event.target.innerHTML;
            document.getElementById("prim").innerHTML = a;
        } else {
            if(event.target.getAttribute("id")==="dot") {
                if (b.includes(".")) return;
            }
            b += event.target.innerHTML;
            document.getElementById("prim").innerHTML = b;
        }
    });
});

document.querySelector(".del").addEventListener("click",function(){
    if (!operator && a.length !== 0) {
        a = a.substring(0, a.length-1);
        document.getElementById("prim").innerHTML = a;
    } else if (operator && b.length !== 0) {
        b = b.substring(0, b.length-1);
        document.getElementById("prim").innerHTML = b;
    }
});

document.querySelector(".add").addEventListener("click",function(){
    if (a.length === 0 || a==="-") return;
    if(a.length!==0 && b.length!==0 && operator){
        if(b==="-") return;
        let result;
        if (operator === "+") result = +a + +b;
        if (operator === "-") result = +a - +b;
        if (operator === "×") result = +a * +b;
        if (operator === "÷") {
            if (+b === 0) {
                result = "ERROR";
            } else {
                result = +a / +b;
            }
        }
        a=result;
        b="";
        document.getElementById("sec").innerText = a + "+";
        document.getElementById("prim").innerText = 0;
    }    
    operator = "+";
    document.getElementById("sec").innerText = a + "+";
    document.getElementById("prim").innerText = 0;
});
document.querySelector(".sub").addEventListener("click",function(){
    if(a==="-"){
        return;
    }
    if (a.length === 0){
        a+="-";
        document.getElementById("prim").innerText = a;
        return;
    }
    if (b.length === 0){
        b+="-";
        document.getElementById("prim").innerText = b;
        return;
    }
    if(a.length!==0 && b.length!==0 && operator){
        if(b==="-") return;
        let result;
        if (operator === "+") result = +a + +b;
        if (operator === "-") result = +a - +b;
        if (operator === "×") result = +a * +b;
        if (operator === "÷") {
            if (+b === 0) {
                result = "ERROR";
            } else {
                result = +a / +b;
            }
        }
        a=result;
        b="";
        document.getElementById("sec").innerText = a + "-";
        document.getElementById("prim").innerText = 0;
    }
    operator = "-";
    document.getElementById("sec").innerText = a + "-";
    document.getElementById("prim").innerText = 0;
});
document.querySelector(".mul").addEventListener("click",function(){
    if (a.length === 0 || a==="-") return;
    if(a.length!==0 && b.length!==0 && operator){
        if(b==="-") return;
        let result;
        if (operator === "+") result = +a + +b;
        if (operator === "-") result = +a - +b;
        if (operator === "×") result = +a * +b;
        if (operator === "÷") {
            if (+b === 0) {
                result = "ERROR";
            } else {
                result = +a / +b;
            }
        }
        a=result;
        b="";
        document.getElementById("sec").innerText = a + "×";
        document.getElementById("prim").innerText = 0;
    }
    operator = "×";
    document.getElementById("sec").innerText = a + "×";
    document.getElementById("prim").innerText = 0;
});
document.querySelector(".div").addEventListener("click",function(){
    if (a.length === 0 || a==="-") return;
    if(a.length!==0 && b.length!==0 && operator){
        if(b==="-") return;
        let result;
        if (operator === "+") result = +a + +b;
        if (operator === "-") result = +a - +b;
        if (operator === "×") result = +a * +b;
        if (operator === "÷") {
            if (+b === 0) {
                result = "ERROR";
            } else {
                result = +a / +b;
            }
        }
        if(result==="ERROR"){
            a = "";
            b = "";
            operator = "";
            document.getElementById("sec").innerText ="";
            document.getElementById("prim").innerText = "ERROR";
            return;
        }
        a=result;
        b="";
        document.getElementById("sec").innerText = a + "÷";
        document.getElementById("prim").innerText = 0;
    }
    operator = "÷";
    document.getElementById("sec").innerText = a + "÷";
    document.getElementById("prim").innerText = 0;
});

document.querySelector(".eq").addEventListener("click",function(){
    if(b==="-" || a==="-") return;
    if (a.length === 0 || b.length === 0 || !operator) return;
    let result;
    if (operator === "+") result = +a + +b;
    if (operator === "-") result = +a - +b;
    if (operator === "×") result = +a * +b;
    if (operator === "÷") {
        if (+b === 0) {
            result = "ERROR";
        } else {
            result = +a / +b;
        }
    }
    document.getElementById("prim").innerHTML = result;
    document.getElementById("sec").innerText = a + operator + b;
    a = result === "ERROR" ? "" : result.toString();
    b = "";
    operator = "";
});
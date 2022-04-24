let curExp = "";
let firstExp ="";
let op;
let prevRes;

document.querySelector("#textArea").addEventListener("click",textArea);
document.querySelector("#seven").addEventListener("click",seven);
document.querySelector("#eight").addEventListener("click",eight);
document.querySelector("#nine").addEventListener("click",nine);
document.querySelector("#slash").addEventListener("click",slash);
document.querySelector("#four").addEventListener("click",four);
document.querySelector("#five").addEventListener("click",five);
document.querySelector("#six").addEventListener("click",six);
document.querySelector("#multiply").addEventListener("click",multiply);
document.querySelector("#one").addEventListener("click",one);
document.querySelector("#two").addEventListener("click",two);
document.querySelector("#three").addEventListener("click",three);
document.querySelector("#add").addEventListener("click",add);
document.querySelector("#zero").addEventListener("click",zero);
document.querySelector("#dot").addEventListener("click",dot);
document.querySelector("#compute").addEventListener("click",compute);
document.querySelector("#substract").addEventListener("click",substract);

function zero(){
   curExp += "0";
   document.querySelector("#display").innerHTML = curExp;
}

function one(){
    curExp += "1";
    document.querySelector("#display").innerHTML = curExp;
 }

 function two(){
    curExp += "2";
    document.querySelector("#display").innerHTML = curExp;
 }

 function three(){
    curExp += "3";
    document.querySelector("#display").innerHTML = curExp;
 }

 function four(){
    curExp += "4";
    document.querySelector("#display").innerHTML = curExp;
 }

 function five(){
    curExp += "5";
    document.querySelector("#display").innerHTML = curExp;
 }

 function six(){
    curExp += "6";
    document.querySelector("#display").innerHTML = curExp;
 }

 function seven(){
    curExp += "7";
    document.querySelector("#display").innerHTML = curExp;
 }

 function eight(){
    curExp += "8";
    document.querySelector("#display").innerHTML = curExp;
 }

 function nine(){
    curExp += "9";
    document.querySelector("#display").innerHTML = curExp;
 }

 function dot(){
    curExp += ".";
}

 function slash(){
     firstExp = curExp;
     curExp = "";
     op="/";
 }

 function multiply(){
    firstExp = curExp;
    curExp = "";
    op="*";
}

function add(){
    firstExp = curExp;
    curExp = "";
    op = "+";
}

function substract(){
    firstExp = curExp;
    curExp = "";
    op = "-"
}

function compute(){
    if(op == "+"){
    document.querySelector("#display").innerHTML = Number(firstExp) + Number(curExp);
    }
    else if(op == "-"){
    document.querySelector("#display").innerHTML = Number(firstExp) - Number(curExp);
    }
    else if(op == "*"){
    document.querySelector("#display").innerHTML = Number(firstExp) * Number(curExp);
    }
    else if(op == "/"){
    document.querySelector("#display").innerHTML = Number(firstExp)/Number(curExp);
    }
    firstExp = "";
    curExp ="";
    op="";
}
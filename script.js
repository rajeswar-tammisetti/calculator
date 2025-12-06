function inputs(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    return [num1,num2];
}

function addition(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=a+b;
    return;
}
function subtraction(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=(a-b).toFixed(5);
    return;
}
function multiplication(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=a*b;
    return;
}
function division(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=(a/b).toFixed(5);
    return;
}
function square(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=(a**b).toFixed(5);
    return;
}
function root(){
    let[a,b]=inputs();
    let result=document.getElementById("result");result.value=(a**(1/b)).toFixed(5);
    return;
}

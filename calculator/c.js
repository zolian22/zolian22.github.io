/* limpa o display */
function clear() {
    document.getElementById("display").value = "";
}
/* recebe os valores */
function get(value) {
    document.getElementById("display").value += value;
}
function  calculate(oper){g
    var result=0;
    result=document.getElementById("display").value;
    document.getElementById("display").value = "";
    if(oper=="sin"){
        document.getElementById("display").value=Math.sin(result);
    }else if(oper=="cos"){
        document.getElementById("display").value=Math.cos(result);
    }else if(oper=="tan"){
        document.getElementById("display").value=Math.tan(result);
    }else if(oper=="sqrt"){
        document.getElementById("display").value=Math.sqrt(result);
    }else if(oper=="asin"){
    document.getElementById("display").value=Math.asin(result);
    }else if(oper=="1√x") {
        document.getElementById("display").value = Math.pow(result, -1 / 2);
    } else{
    document.getElementById("display").value=undefined;
    }
}
/* calculates */
function calculates() {
    var result = 0;
    result = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").value = eval(result);
};
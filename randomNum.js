let min=1;
let max=6;


document.getElementById("btn1").onclick=function(){

    let randmNum=Math.floor(Math.random()*max)+min;

    document.getElementById("h3").textContent=randmNum;
}
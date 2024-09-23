var timer=60;
var score=0;
var newHit;

function increaseScore(){
    score+=10;
    document.querySelector("#scorern").textContent=score;
}
function getNewHit(){
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#hitrn").textContent=newHit;
}
function getRandom(){
    var clutter="";
    for(let i=0;i<119;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;  
}
    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var timern= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(timern);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}


document.querySelector("#pbtm").addEventListener("click",function(details){
    var clkdNum=Number(details.target.textContent);
    if(clkdNum===newHit){
        increaseScore();
        getRandom();
        getNewHit();
    }
})
getRandom();
runTimer();
getNewHit();


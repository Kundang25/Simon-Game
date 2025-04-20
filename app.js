let gameseq=[];
let userseq=[];

let started =false;
let level=0;

let btns=["yellow","purple","red","green"]

let h2= document.querySelector("h2");

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started")
        started=true;

        levelup();
    }
   
})
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250 )
}
function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250 )
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkAns(idx){
    // console.log("curr level : ",l evel);

    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }else {
        h2.innerHTML = `Game Over! Your Score was <b>${level} </b><br><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    // console.log("Button waas pressed")
    // console.log(this)
    let btn=this;
    userflash(btn); 

    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnpress )
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
// commit
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText= `Level ${level}`;

    let randomIdx= Math.floor(Math.random()* 3);
    let randomColor= btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randombtn);
}

function checkAns(idx) {
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
          setTimeout(levelUp, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor="red";
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        reset();
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allbtns=  document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started= false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



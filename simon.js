let gameSeq = [];
let userSeq = [];
let highscore = [];

let btns = ["red","yellow","green","purple"];
let started = false;
let level = 0;

let hscore = 0;
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');


document.addEventListener("keypress",function()
{
    console.log("game is started");
    started = true;   
     levelUp();
});

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() *3);
    let randomColor  = btns[randIdx];
    let randbtn  = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randbtn);
    
}

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");
},250);
}

function checkAns(idx)
{
    
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
            
        }
    }
    else{
        h2.innerHTML = `Game Over ! your score was <b>${level}</b><br> Press any key to start. `;
        highscore.push(level);
        let highscoreres = highscore.reduce((max,el)=>
        {
            if(el > max)
            {
                return el;
            }
            else{
                return max;
            }
        });
        h3.innerText = `High Score = ${highscoreres}`;
        
        document.querySelector('body').style.backgroundColor = "red";
     setTimeout(function()
    {
        document.querySelector('body').style.backgroundColor = "white";
    },150);
        reset();
    }
}
function btnPress()
{
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute('id');
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}



let buttons = document.querySelectorAll(".btn");
for(btn of buttons)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level  = 0;
}

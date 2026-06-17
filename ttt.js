document.addEventListener("DOMContentLoaded", () => {

let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count=0;
let gameOver=false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO===true){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    count++;
    checkWinner();
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText =`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const showDraw=()=>{
    msg.innerHTML= `🤝 It's a Draw!`;
    msgContainer.classList.remove("hide");
    gameOver=true;
    disableBoxes();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
     let pos1=boxes[pattern[0]].innerText;  
     let pos2=boxes[pattern[1]].innerText;   
     let pos3=boxes[pattern[2]].innerText;  
     if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2===pos3){  
            showWinner(pos1);
            return;
        }
     }
     if(count==9 && !gameOver){
        showDraw();
     }
    }
};
const resetGame=()=>{
    turnO=true;
    count=0;
    gameOver=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


});
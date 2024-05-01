let container =document.querySelector(".Container");
let msg=document.querySelector("#msg");
let newGame =document.querySelector("#newGame");
let msgContainer=document.querySelector(".msgContainer");
let game =document.querySelector(".Game");
let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset");
let turn0=true;

const winningCombination=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
            
        }
        else{
            box.innerText="O";
            turn0=true;
            
        }
        box.disabled=true;
        checkWinner();


    });
});
let checkDraw=()=>{
    for(let box of boxes){
        if(box.innerText===""){
          return false;
        }

    }
    return true;
    
};
let checkWinner=()=>{
    for(let pattern of winningCombination ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return;
            }
            
     

    }
}
if(checkDraw()){
    showDraw();
}

};

let showDraw=()=>{
    msg.innerText="This Match Is Draw";
    msgContainer.classList.remove("hide");
};
let showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
let disableBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
}

};
let enableBoxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}


};
const resetGameButton=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
const NewGameButton=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
reset.addEventListener("click",resetGameButton);
newGame.addEventListener("click",NewGameButton);
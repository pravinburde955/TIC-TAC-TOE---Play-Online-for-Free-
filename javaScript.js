let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//player O /player X
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

myFun=(box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            box.style.color="black";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
})
}

const disabledBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
boxes.forEach(myFun);
const checkWinner=()=>{
    for(let pattern of winPattern ){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            console.log("Winner!",pos1Val);
            showWinner(pos1Val);   
        }
       }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
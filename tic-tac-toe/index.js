let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");


let turn0 = true;
let count = 0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () =>{
   turn0 = true;
   count = 0;
   enableBtn();
  
}

//for clicking each buttons
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0===true) {
            box.innerText = "O";
            box.style.color = "#af0efa";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#3b324b";
            turn0 = true;
        }
        count++;
        winnerOf();
    })
})
const disableBtn = () =>{
    for( let box of boxes) {
        box.disabled=true;
    }
}
const enableBtn = () =>{
    for( let box of boxes) {
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
    
};
const showDraw =()=> {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");

    boxes.forEach((box) => {
        box.classList.add("draw");
      // add draw style
    });

    disableBtn();
};

const winnerOf = ()=> {
    for (let patterns of winPatterns) {
        if (
            boxes[patterns[0]].innerText !== "" &&
            boxes[patterns[1]].innerText !== "" &&
            boxes[patterns[2]].innerText !== ""
        ) {
            if (
                boxes[patterns[0]].innerText === boxes[patterns[1]].innerText &&
                boxes[patterns[1]].innerText === boxes[patterns[2]].innerText
            ) {
                console.log("The Winner is ", boxes[patterns[0]].innerText);
                showWinner( boxes[patterns[0]].innerText);
                return;
            } 
           
        }
       if (count === 9) {
        showDraw();
    }
    }
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);

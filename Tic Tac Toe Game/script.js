let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let New = document.querySelector("#New");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;    // playerO , playerX 
let count = 0;       // To Track Draw 

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    count = 0
    enableboxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX 
            box.innerText = "X";
            turnO = true;
        }
  box.disabled = true;
  count++;

  let isWinner = checkWinner();

  if(count===9 && !isWinner) {
    gameDraw();
  }
    });
}
);
const gameDraw = () => {
    msg.innerText="Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}; 

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner =(winner) => {
msg.innerText=`Congratulations , Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner= () => {
    for (let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1 !=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

New.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


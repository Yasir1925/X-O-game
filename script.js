const cellElement=document.querySelectorAll(".cell");

const player1=document.querySelector(".player1");
const player2=document.querySelector(".player2");

const result=document.querySelector(".result");
const h1=document.querySelector(".result h1");
const btn=document.querySelector(".result button");

const WinnerZone=[   //now it becomes a arrey of 8 elememts
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const playero="O";
const playerx="X";
let turn=true;

cellElement.forEach(cell=>{
    cell.onclick=()=>{
        let currentPlayer=turn?playerx:playero;  //if else 
        cell.classList.add("disabled");//it is for only one click should i do in a cell
        add(cell,currentPlayer);
        if(Winner(currentPlayer)){
             //console.log("Winner");
            result.classList.remove("inactive");
            h1.innerHTML="Player "+currentPlayer+" Win The Game";
            }else if(isDraw()){
                //console.log("draw");
                result.classList.remove("inactive");
                h1.innerHTML="Game  Draw";
            }else{
                swapPlayer();
            }
    }
})

function Winner(currentPlayer)
{
    return WinnerZone.some(condition=>{  //some is a method, runs a loop, if 1 is true it returns  true
        return condition.every(index=>{  //in every method,it checks all the conditions should be true
            return cellElement[index].classList.contains(currentPlayer);
        })
    })
}

function isDraw()
{
    return [...cellElement].every(cell=>{  //...for make it function
        return cell.classList.contains(playerx) || cell.classList.contains(playero);
    })
}

function swapPlayer()
{
    turn=!turn;
    if(turn){
        player2.classList.add("active")
        player1.classList.remove("active");
    }
    else{
        player1.classList.add("active")
        player2.classList.remove("active");
    }
}

function add(cell,currentPlayer)
{
    cell.innerHTML=currentPlayer;
    cell.classList.add(currentPlayer);
}

btn.onclick=()=>{
    location.reload();
}


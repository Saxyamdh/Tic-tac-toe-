const board=document.getElementById('board')
const squares=[]

let player1='X'
let player2='O'
let currentPlayer=player1
let lastselected=null

// creating the boxes
for(let i=0;i<9;i++){
    const smallboxes=document.createElement('div')
    smallboxes.classList.add('square')
    smallboxes.addEventListener('click',function(){
        if(!smallboxes.innerText){
            smallboxes.innerText=currentPlayer;
            checking();
            lastselected=i;
            current();
        }
    })
    squares.push(smallboxes)
    board.appendChild(smallboxes)
}

//checking the result
function checking(){
    winningCombos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
    for(let i=0;i<winningCombos.length;i++){
        const [a,b,c]=winningCombos[i];
        if(squares[a].innerText&&
           squares[a].innerText  === squares[b].innerText &&
           squares[a].innerText === squares[c].innerText   
        ){
        alert(`${currentPlayer} wins`)
        reset();
        }
}
}



//switching the player
function current(){
    currentPlayer = currentPlayer === player1 ? player2 : player1
}

//clearing the last item
const clearButton=document.getElementById('clear')
clearButton.addEventListener('click',function(){
    if(lastselected!==null){
    squares[lastselected].innerText=""
    current();
    lastselected=lastselected-1}
})

//reseting the event 
function reset(){
    for(let i=0;i<squares.length;i++){
        squares[i].innerText=""
    }
    currentPlayer=player1;
}


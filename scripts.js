//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let board = [
  ['', '', ''], 
  ['', '', ''], 
  ['', '', '']
]

let currentMarker = 'X'






const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}












const addMarker = (id) => {

  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  document.getElementById(id).innerHTML = currentMarker


  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  board[row][column] = currentMarker
  checkForWin()
  
}











const changeMarker = () => {
  console.log('changeMarker')
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}






const resetBoard = () => {
  const elements = document.getElementsByTagName("td");

  const squares = document.getElementsByTagName("TD");

  for (i=0; i < squares.length; i++) {


    console.log(squares[i].id)


    squares[i].innerHTML = null
  }  
  
}

const checkForWin = () => {
     if(horizontalWin() || verticalWin() || diagonalWin()) {
       window.alert(`Player ${currentMarker} won!`)
     } else {
       changeMarker()
     }
   }

   const horizontalWin = () => {
      if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
      || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
    ) {
      return true
    } else if
      ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
      || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
     ) {
      return true
    } else if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
    || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") ){
      return true
     }
    }
   

   const verticalWin = () => {
         if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
        || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") 
    ) {
      return true
    } else if ((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"))
    {
    return true
    } else if ((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")) {
      return true
    }
   }

   const diagonalWin = () => {
         if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
        || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    ) {
      return true
    } else if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
    || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
      return true
    }
   }

   
// restart game button
var restart = document.querySelector("#b");
// grabs all the squares
var squares = document.querySelectorAll("td");

// clear all those squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener('click', clearBoard);
// check the square marker

// for loop to add even listners to all the squares

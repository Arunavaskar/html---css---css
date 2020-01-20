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

var cellOne = document.querySelector("#one");

cellOne.addEventListener("click", function(){
  // if the cellOne content is blank then
  // this will set the content to "X"
  if (cellOne.textContent === '') {
    cellOne.textContent = 'X';
  // if the cellOne content is "X" then
  // this will set the content to "O"
  }else if (cellOne.textContent === 'X') {
    cellOne.textContent = "O";
  // if none of those are true then
  // set the content to "" blank
  }else {
    cellOne.textContent = '';
  }
})








// for loop to add even listners to all the squares

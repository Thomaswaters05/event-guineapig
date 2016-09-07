document.getElementById("keypress-input").addEventListener("keypress", mirrored);
document.getElementById("add-color").addEventListener("click", colors);
document.getElementById("make-large").addEventListener("click", titanUp);
document.getElementById("add-border").addEventListener("click", borderUp);
document.getElementById("add-rounding").addEventListener("click", roundUp);





var art = document.querySelectorAll(".article-section"); // querySelector puts in an array so you can modigy
var outputs = document.getElementById("output-target");
var hova = document.getElementById("page-title");
var mirrorText = document.getElementById("keypress-input");



for (var i = 0; i < art.length; i++) {
  art[i].addEventListener("click", myfunc )

}

function myfunc() {
  var clicked = event.target.innerHTML;
  outputs.innerHTML = "You picked " + clicked;//outputs what you click on within the listed elements
}

function hoverRound() {
  var outputH1 = event.target.innerHTML;
  outputs.innerHTML = "YOU MOVED YOUR MOUSE OVER THE HEADER!";//changes when you hover
}

function hoverOff() {
  var outputH1 = event.target.innerHTML;
  outputs.innerHTML = "YOU LEFT ME"; //changes once you stop hovering
}

function mirrored(e) {
  outputs.innerHTML += e.key;

}

function colors() {
  document.getElementById("guinea-pig").classList.add("red");
}


function titanUp() {
  document.getElementById("guinea-pig").style.fontSize = "xx-large";
}

function borderUp() {
  document.getElementById("guinea-pig").style.border = "thick solid";
}

function roundUp() {
  document.getElementById("guinea-pig").classList.add("rounded");
}


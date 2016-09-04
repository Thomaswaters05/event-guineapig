document.getElementById("keypress-input").addEventListener("keypress", mirrored);


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


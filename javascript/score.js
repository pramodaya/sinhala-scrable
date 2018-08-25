var p1Add = document.querySelector("#p1AddBtn");
var p1Min = document.querySelector("#p1MinBtn");
var p1Score = document.querySelector("#p1Score");

var p2Add = document.querySelector("#p2AddBtn");
var p2Min = document.querySelector("#p2MinBtn");
var p2Score = document.querySelector("#p2Score");

var currentP1Score =0;
var currentP2Score =0;

p1Add.addEventListener("click", function(){
	currentP1Score+=1;
	p1Score.textContent = currentP1Score;
});

p1Min.addEventListener("click", function(){
	currentP1Score-=1;
	p1Score.textContent = currentP1Score;
});

p2Add.addEventListener("click", function(){
	currentP2Score+=1;
	p2Score.textContent = currentP2Score;
});

p2Min.addEventListener("click", function(){
	currentP2Score-=1;
	p2Score.textContent = currentP2Score;
});
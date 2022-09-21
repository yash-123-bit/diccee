
function random(){
var randomNumber = Math.random();
var randomNumber1 = Math.floor(randomNumber*6)+1;
return randomNumber1;
}
var player1 = random();
var player2 = random();



if(player1>player2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"+"";
}
else if (player2>player1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "draws";
}

document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+player1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+player2+".png");


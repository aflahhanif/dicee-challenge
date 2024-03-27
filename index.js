//Generate random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Generate random number for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Change image based on random numbers created
var fileLocation1 = "images/";
var fileName1 = "dice" + randomNumber1 + ".png";
var fileLocation2 = "images/";
var fileName2 = "dice" + randomNumber2 + ".png";
document.querySelector("img.img1").setAttribute("src", fileLocation1 + fileName1);
document.querySelector("img.img2").setAttribute("src", fileLocation2 + fileName2);

//Show the results of the dice comparrison
//Check if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
//Check if draw 
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
} 
//Check if player 2 wins
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}


/*RNG LONG VERSION
var randomNumber1 = Math.random(); //Generate 0 - 0.9999
randomNumber1 = randomNumber1 * 6; //Get number 0-5.999
randomNumber1 = Math.floor(randomNumber1)+1; //Get 1-6 ([0-5]+1)

var randomNumber2 = Math.random(); //Generate 0 - 0.9999
randomNumber2 = randomNumber2 * 6; //Get number 0-5.999
randomNumber2 = Math.floor(randomNumber2)+1; //Get 1-6 ([0-5]+1)
*/
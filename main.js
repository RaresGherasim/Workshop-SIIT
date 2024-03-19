console.log(`the game begins`);

let players = [];
const player1 = new Player("Rares", "pig.jpg");
const player2 = new Player("Diana", "cat.jpg");
const player3 = new Player("Adi", "dog.jpg");


function randomNum (maxValue = 10){
    return Math.floor(Math.random() * maxValue)
}

function movePlayer(player) {
    player.score += randomNum();
}


console.log(`the game begins`);

let players = [];
players.push( new Player("Rares", "pig.jpg") );
players.push( new Player("Diana", "cat.jpg") );
players.push( new Player("Adi", "dog.jpg") );


function randomNum (maxValue = 10){
    return Math.floor(Math.random() * maxValue)
}

function movePlayer(player) {
    player.score += randomNum();
}

function newRound(){
    players.forEach(player => player.move() )
}

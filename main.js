console.log(`the game begins`);

let players = [];
const player1 = new Player("pig.svg","Rares");
players.push( new Player("pig.svg","Rares") );
players.push( new Player("cat.svg","Diana") );
players.push( new Player("giraffe.svg", "Adi") );


function randomNum (maxValue = 10){
    return Math.floor(Math.random() * maxValue)
}

function movePlayer(player) {
    player.score += randomNum();
}

function newRound(){
    players.forEach(player => player.move() )
}
players.forEach(player => drawPlayer(player));

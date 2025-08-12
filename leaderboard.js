const playerList = [];

function addPlayer(newPlayerName) {
  const newPlayer = {
    name: newPlayerName,
    score: 0,
  };

  playerList.push(newPlayer);
}

function getAllPlayers() {
  console.log(playerList);
}

addPlayer("Tifar");
addPlayer("Amal");

getAllPlayers();

const team = {
  _players: [
    {
      firstName: "Tom",
      lastName: "Lee",
      age: 20
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 22
    },
    {
      firstName: "Leonard",
      lastName: "Benjamin",
      age: 25
    }
  ],
  _games: [
    {
      opponent: "Tigers",
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: "Bulls",
      teamPoints: 22,
      opponentPoints: 37
    },
    {
      opponent: "Canucks",
      teamPoints: 52,
      opponentPoints: 47
    }   
  ],
  get players() {
      return this._players;
  },
  get games() {
      return this._games;
  },
  addPlayer(firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player);
  },
  addGame(opponent, teamPoints,opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
  }
};

console.log(team.players);
console.log(team.games);


// team.addPlayer("Steph", "Curry", 28);
// team.addPlayer("Lisa", "Curry", 44);
// team.addPlayer("Bugs", "Bunny", 76);

// console.log(team._players);

// team.addGame("Vikings", 30, 20);
// team.addGame("Warriors", 50, 44);
// team.addGame("Knights", 36, 22);

// console.log(team._games);


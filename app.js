const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const gameUl = document.createElement('ul');

for (let game of warriorsGames) {
  const {
    homeTeam,
    awayTeam
  } = game;

  const gameLi = document.createElement('li');
  const teams = `${awayTeam.team} @ ${homeTeam.team}`;
  const score = awayTeam.points > homeTeam.points ? `<b>${awayTeam.points}</b> - ${homeTeam.points}` : awayTeam.points < homeTeam.points ?`${awayTeam.points} - <b>${homeTeam.points}</b>` : `${awayTeam.points} - ${homeTeam.points}`;
  //Score is attributed using multiple conditions on the Ternary Operator

  const mainTeam = homeTeam.team === 'Golden State' ? homeTeam : awayTeam;

  gameLi.innerHTML = `${teams} | ${score}`;
  gameLi.classList.add(mainTeam.isWinner ? 'win' : 'loss');
  gameUl.appendChild(gameLi);
}

document.body.prepend(gameUl);
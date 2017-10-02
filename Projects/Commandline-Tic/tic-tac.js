var prompt = function(question, callback) {
      var stdin = process.stdin,
      stdout = process.stdout;

      stdin.resume();
      stdout.write(question);

      stdin.once('data', function (data) {
          callback(data.toString().trim());
      });
  }
var board = ''

prompt('Okay so you on the left, tell me what your name is...  ', (name) => {
  console.log(`Thanks ${name}!`, 'You are now Player one!')

  P1 = new Player(name)
  console.log('\n')

  if (P1.name) {
    prompt('So its your turn person on the right, what is your name?  ', (name2) => {
      console.log(`Well thats a fine name you have there, ${name2}!`, 'You are going to be player two!')
      P2 = new Player(name)
      setTimeout(()=> {
        initializeBoard(P1.name, P2.name)
      }, 500)
    })

  }
})

class Board {
  constructor(playerOne, playerTwo) {
    this.boardMap = [...Array(3)].map(() => [...Array(3)].map(() => 'null'))
    this.playerOne = playerOne
    this.playerTwo = playerTwo
  }
}

class Player {
  constructor(name) {
    this.name = name
    this.marker = ''
  }
}

var initializeBoard = function(playerOne, playerTwo) {
  board = new Board(playerOne, playerTwo)
  console.log(`Ok, so ${playerOne} can be Player One, and ${playerTwo} can be Player Two`)
  setTimeout(() => {
    console.log('This is the board you guys are going to be playing with... ' )
    console.log(board.boardMap)
    setTimeout(() => {
      initializePlayers()
    }, 500)
  }, 500)
}

var initializePlayers = function() {
  prompt('P1 whats your marker?', (m) => {
    P1.marker = m
    console.log(`Your marker is ${m}`)
    setTimeout(() => {
      prompt('P2 whats gonna be your marker?', (m) => {
        P2.marker = m
        console.log(`Ok your marker is ${m}`)
        startGame()
      })
    })
  })
}

var startGame = function() {
  for (var i = 0; i < 9; i++) {
    if (i === 0 || i % 2 === 0) {
      console.log(board)
      var placement = ''
      prompt('Print me where you would like to place a marker', (m) => placement = m)
      placeMarker(P1, placement)
    } else {
      console.log(board)
      var placement = ''
      prompt('Print me where you would like to place a marker', (m) => placement = m)
      placeMarker(P2, placement)
    }
  }
}

var placeMarker = function(player, string) {
  var coords = string.split(' ')
  if (board[coords[0], coords[1]] === 'null') {
    board[coords[0], coords[1]] = player.marker
  } else {
    console.log('sorry you botched your turn!')
  }
}

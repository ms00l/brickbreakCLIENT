// hardcoded game data for the properties of the ball, the bricks, the player and the paddle
export default {
  ballObj: {
    x: 20,
    y: 200,
    dx: 5,
    dy: 5,
    rad: 10,
    speed: 10
  },
  brickObj: {
    x: 0.5,
    y: 50,
    height: 20,
    density: 1,
    colors: ['white', 'lightblue']
  },
  player: {
    name: 'big dogg mcgraw',
    lives: 5,
    score: 0,
    level: 1
  },
  paddleProps: {
    height: 20,
    width: 100,
    x: 100,
    color: 'white'
  }
}

// in backend, in user model add a scores subdocument
// write score model with an owner, timestamps, score value, any other info
// make an api call on end of game that PATCH's score to user model's score [array]
// write a path in front end to a user's list of scores displayed on Cards
// ability to get all users, or just singular

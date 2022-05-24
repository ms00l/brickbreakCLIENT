/* eslint-disable prefer-const */
// setting up collision for the paddle
// ball should deflect in certain ways when hitting the paddle
// it should hit ball off the top and sides of paddle
// if it hits the top the ball should go straight up
// if it hits the right hand side of the top of the paddle then it should deflect the ball off to the right and so on
export default function PaddleCollision (ballObj, paddleProps) {
  if (
    ballObj.x < paddleProps.x + paddleProps.width &&
        ballObj.x > paddleProps.x &&
        paddleProps.y < paddleProps.y + paddleProps.height &&
        ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
  ) {
    // collisionPoint is where the ballObj hit the paddle
    let collisionPoint = ballObj.x - (paddleProps.x + paddleProps.width / 2)

    // normalizes the value
    collisionPoint = collisionPoint / (paddleProps.width / 2)

    // calculates the angle of the ball
    let angle = (collisionPoint * Math.PI) / 3
    ballObj.dx = ballObj.speed * Math.sin(angle)
    ballObj.dy = -ballObj.speed * Math.sin(angle)
  }
}

// function to reset the ball on all lives lost game ender
export default function ResetBall (ballObj, paddleProps, canvas) {
  ballObj.x = paddleProps.x
  ballObj.y = paddleProps.y - 80
  ballObj.dx = 6 * (Math.random() * 2 - 1)
  ballObj.dy = -6
}

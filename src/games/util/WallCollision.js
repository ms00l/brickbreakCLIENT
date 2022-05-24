export default function WallCollision (ballObj, canvas, player) {
  if (ballObj.y + ballObj.rad >= canvas.height) {
    player.lives--
  }
  if (ballObj.y - ballObj.rad <= 0 || ballObj.y + ballObj.rad >= canvas.height) {
    ballObj.dy *= -1
  }
  if (ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0) {
    ballObj.dx *= -1
  }
}

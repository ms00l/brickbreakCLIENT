// function for brick collision which intakes the circle aka the ball, and the rectangle which is the brick
export default function BrickCollision (circle, rect) {
  // calculates absolute value of x and y
  const distX = Math.abs(circle.x - rect.x - rect.width / 2)
  const distY = Math.abs(circle.y - rect.y - rect.height / 2)
  if (distX > rect.width / 2 + circle.rad) {
    return {
      hit: false
    }
  }
  if (distY > rect.height / 2 + circle.rad) {
    return {
      hit: false
    }
  }
  if (distX <= rect.width / 2) {
    return {
      hit: true,
      axis: 'Y'
    }
  }
  if (distY <= rect.height / 2) {
    return {
      hit: true,
      axis: 'X'
    }
  }
  // tests for corner collisions
  const dx = distX - rect.width / 2
  const dy = distY - rect.height / 2
  return {
    hit: dx * dx + dy <= circle.rad * circle.rad,
    axis: 'X'
  }
}

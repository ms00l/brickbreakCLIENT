// kinda confusing i know lol
// Brick is the function that sets up an array of 'newbricks'
// inside 'newbricks' is the class of a singular brick that gets created with the const of 'newBrick'
// literally just bricks on bricks
export default function Brick (level, bricks, canvas, brick) {
  brick.width = canvas.width / 5 - 1
  const newbricks = []
  if (!bricks) {
    return []
  }
  // If all the levels are filled
  if (bricks.length >= 5 * level) {
    return
  }

  for (let i = 0; i < 5 * level; i++) {
    const newBrick = new SingleBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    newbricks.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }
  }
  return newbricks
}

// class for a singular brick, feeds into the array of newbricks
class SingleBrick {
  constructor (x, y, w, h, c) {
    this.x = x - w
    this.y = y
    this.width = w
    this.height = h
    this.colors = c
    this.broken = false
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.broken ? 'rgba(19, 73, 89, 0)' : this.colors[1]

    ctx.lineWidth = 5
    ctx.strokeStyle = this.broken ? 'rgba(19, 73, 89, 0)' : 'transparent'
    // ctx.globalCompositeOperation = "destination-atop";
    // ctx.shadowBlur = 0;
    // ctx.shadowColor = "blue";
    ctx.fill()
    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
}

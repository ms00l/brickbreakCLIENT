// Paddle class to set up its movement on the canvas and its initial properties
export default (ctx, canvas, paddleProps) => {
  class Paddle {
    constructor (x) {
      this.x = x
      this.y = canvas.height - 30
      this.height = 20
      this.width = paddleProps.width
      this.colors = 'white'
    }

    move () {
      ctx.beginPath()
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.fillStyle = 'white'
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.fillStyle = 'white'
      ctx.shadowBlur = 0
      ctx.shadowColor = 'blue'
      ctx.strokeRect(this.x, this.y, this.width, this.height)
      ctx.fill()
    }
  }
  // setting the const of paddle to create a new Paddle throwing in its current position of the x axis
  const paddle = new Paddle(paddleProps.x)
  // setting up the boundaries for the paddle
  // if statement ensures it stays within canvas' width or 'boundary'
  paddle.move()
  if (paddleProps.x <= 0) {
    paddleProps.x = 0
  } else if (paddleProps.x + paddleProps.width >= canvas.width) {
    paddleProps.x = canvas.width - paddleProps.width
  }
}

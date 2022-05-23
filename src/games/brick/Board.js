import React, { Fragment, useEffect, useRef } from 'react'
import { BallMovement } from './Ball'
import data from './../../gameData'
import WallCollision from '../util/WallCollision'
import Paddle from './Paddle'

export default function Board () {
  const canvasRef = useRef(null)
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const { ballObj, paddleProps } = data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // handling ball movement
      BallMovement(ctx, ballObj)
      // what happens when ball hits wall
      WallCollision(ballObj, canvas)

      Paddle(ctx, canvas, paddleProps)
      //   ctx.beginPath()
      //   ctx.fillStyle = 'red'
      //   ctx.arc(x, 50, 20, 0, 2 * Math.PI)
      //   ctx.strokeStyle = 'black'
      //   ctx.strokeWidth = 4
      //   ctx.fill()
      //   ctx.stroke()
      //   x += 8
      requestAnimationFrame(render)
    }
    render()
  }, [])
  return (
    <>
      <canvas id="canvas" ref={canvasRef} height="500" width={window.innerWidth - 20} />
    </>
  )
}

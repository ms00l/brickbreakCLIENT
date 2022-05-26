/* eslint-disable prefer-const */
import React, { Fragment, useEffect, useRef } from 'react'
import { BallMovement } from './Ball'
import data from './../../gameData'
import WallCollision from '../util/WallCollision'
import Paddle from './Paddle'
import Brick from './Brick'
import BrickCollision from '../util/BrickCollision'
import PaddleCollision from '../util/PaddleCollision'
import Player from './Player'
import NewLevel from '../util/NewLevel'
import Reset from '../util/Reset'

let bricks = []

const { ballObj, paddleProps, player, brickObj } = data

export default function Board () {
  const canvasRef = useRef(null)
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      // assigning paddleprops so that the paddle physics work:
      paddleProps.y = canvas.height - 30

      // assign bricks
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj)
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      Player(ctx, player, canvas)

      // game ending if statement
      if (player.lives === 0) {
        player.lives = 5
        player.level = 1
        player.score = 0
        Reset(ballObj, paddleProps, canvas)
        bricks.length = 0
      }

      // displays the bricks
      bricks.map((brick) => {
        return brick.draw(ctx)
      })
      // handling ball movement
      BallMovement(ctx, ballObj)
      // pass in end level function written in BrokenBricks.js
      NewLevel(bricks, player, canvas, ballObj)
      // add conditional if only all the bricks are hit
      // add functionality to do a check to see if all the bricks are broken in brickcollision.js
      // or write a loop that checks if bricks are broken
      // console.log(bricks)
      // what happens when ball hits wall
      WallCollision(ballObj, canvas, player, paddleProps)

      // brick collision
      let brickCollision
      // diverts when brick is hit
      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i])

        // checks if the brick was hit and if it isnt already broken, sets brick.broken to true
        // so that you dont see the brick anymore
        // also sets diversion course
        if (brickCollision.hit && !bricks[i].broken) {
          if (brickCollision.axis === 'X') {
            ballObj.dx *= -1
            bricks[i].broken = true
          } else if (brickCollision.axis === 'Y') {
            ballObj.dy *= -1
            bricks[i].broken = true
          }
          // adds 1 to score once brick is broken
          player.score += 1
        }
      }

      Paddle(ctx, canvas, paddleProps)
      PaddleCollision(ballObj, paddleProps)
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
      <canvas id="canvas"
        ref={canvasRef}
        onMouseMove={(event) => (paddleProps.x = event.clientX - paddleProps.width / 2)}
        height="500"
        width="800" />
    </>
  )
}

import React, { Fragment, useEffect, useRef } from 'react'

export default function Board () {
  const canvasRef = useRef(null)
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.fillStyle = 'red'
      ctx.arc(x, 50, 20, 0, 2 * Math.PI)
      ctx.strokeStyle = 'black'
      ctx.strokeWidth = 4
      ctx.fill()
      ctx.stroke()
      x += 8
      requestAnimationFrame(render)
    }
    render()
  }, [])
  return (
    <>
      <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
    </>
  )
}

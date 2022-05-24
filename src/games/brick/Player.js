// bringing the raw player stats to the game itself
// will need to manipulate the game data to intake schema
export default function Player (ctx, player, canvas) {
  // name section
  ctx.font = '20px Karla'
  ctx.fillStyle = 'white'
  ctx.fillText(`Name: ${player.name}`, 20, 30)

  // amount of balls left
  ctx.font = '20px Karla'
  ctx.fillStyle = 'red'
  let gap = 0
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText('( ͡❛ ͜ʖ ͡❛)', canvas.width / 2 + gap, 30)
    gap += 30
  }

  // score count
  ctx.font = '20px Karla'
  ctx.fillStyle = 'white'
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30)
}

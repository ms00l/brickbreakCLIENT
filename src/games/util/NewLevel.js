/* eslint-disable prefer-const */
// importing game data so that bricks stay aligned at top of canvas on new level
import data from '../../gameData'
// function to determine level is over when all the bricks are broken
export default function NewLevel (bricks, player, canvas, ballObj) {
  let { brickObj } = data
  let total = 0
  // for loop to check to see if all the bricks are broken
  for (let i = 0; i < bricks.length; i++) {
    // this if statement adds more bricks for the new level
    if (bricks[i].broken === true) {
      // console.log(total)
      total++
      // 'player.lives++' written here was supposed to fix bug but instead its an infinite lives cheat code
      // i really love programming this is amazing LOL
      // player.lives++
      console.log(player.lives)
    }
    // once all bricks are broken it adds mores bricks
  }
  // changes position of the ball once every brick is broken
  if (total === bricks.length) {
    // gives player one extra life for passing level
    // player.lives++
    player.level++
    ballObj.y = canvas.height - 20
    // resetting bricks y axis back to original int of 50
    // this for some reason causes the player.lives++ to not work
    brickObj.y = 50

    // this DID work and now it doesn't lol
  }
}

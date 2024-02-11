export default class InputHandler {
  constructor(game) {
    this.game = game
    window.addEventListener('keydown', (event) => {
      console.log(event.key)
      this.game.keys.add(event.key)

      if (event.key === 'd') {
        this.game.debug = !this.game.debug
      }
      if (event.key === 'PageUp') {
        this.game.player.speed += 1
      }
      if (event.key === 'PageDown') {
        this.game.player.speed -= 1
      }
    })
    window.addEventListener('keyup', (event) => {
      this.game.keys.delete(event.key)
    })
  }
}

export default class UserInterface {
  constructor(game) {
    this.game = game
    this.color = '#fff'
  }

  draw(context) {
    context.save()
    context.fillStyle = this.color
    context.shadowOffsetX = 1
    context.shadowOffsetY = 1
    context.shadowColor = '#333'

    // debug
    if (this.game.debug) {
      context.font = `12px System-ui`
      context.textAlign = 'right'
      context.fillText(`debug: ${this.game.debug}`, this.game.canvas.width -20, 15)
      context.fillText(`width: ${(this.game.level.width * this.game.level.tileWidth)}`, this.game.canvas.width -20, 30)
      context.fillText(`height: ${(this.game.level.height * this.game.level.tileHeight)}`, this.game.canvas.width -20, 45)
      context.fillText(`keys: ${Array.from(this.game.keys).join(', ')}`, this.game.canvas.width -20, 60)
    }

    context.restore()
  }
}

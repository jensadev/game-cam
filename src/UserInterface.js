export default class UserInterface {
  constructor(game) {
    this.game = game
    this.fontSize = 25
    this.fontFamily = 'Arial'
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
      context.fillText(`width: ${this.game.map.width}`, this.game.canvas.width -20, 30)
      context.fillText(`height: ${this.game.map.height}`, this.game.canvas.width -20, 45)
    }

    context.restore()
  }
}

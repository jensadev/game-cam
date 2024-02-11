export default class Player {
  constructor(game) {
    this.game = game
    this.width = 32
    this.height = 32
    this.speed = 5
    this.x = game.width / 2 - this.width / 2
    this.y = game.height - this.height - 10
  }

  update(deltaTime) {
    if (this.game.keys.has('ArrowLeft')) {
      this.x -= this.speed
    }
    if (this.game.keys.has('ArrowRight')) {
      this.x += this.speed
    }
    if (this.game.keys.has('ArrowUp')) {
      this.y -= this.speed
    }
    if (this.game.keys.has('ArrowDown')) {
      this.y += this.speed
    }
  }

  draw(context) {
    context.fillStyle = '#0f0'
    context.fillRect(this.x, this.y, this.width, this.height)

    if (this.game.debug) {
      context.strokeStyle = '#fff'
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = '#fff'
      context.font = '12px Arial'
      context.fillText(`x:${this.x}, y:${this.y}`, this.x, this.y - 5)
    }
  }
}
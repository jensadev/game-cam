export default class Player {
  constructor(game, x, y) {
    this.game = game
    this.width = 32
    this.height = 32
    this.speed = 5
    this.x = x
    this.y = y
    this.facing = {
      x: 0,
      y: 0
    }
  }

  update(deltaTime) {
    if (this.game.keys.has('ArrowLeft')) {
      const newX = this.x - this.speed;
      if (newX >= 0) {
        this.x = newX;
        this.facing.x = -1;
      }
    }
    if (this.game.keys.has('ArrowRight')) {
      const newX = this.x + this.speed;
      if (newX <= this.game.map.width - this.width) {
        this.x = newX;
        this.facing.x = 1;
      }
    }
    if (this.game.keys.has('ArrowUp')) {
      const newY = this.y - this.speed;
      if (newY >= 0) {
        this.y = newY;
        this.facing.y = -1;
      }
    }
    if (this.game.keys.has('ArrowDown')) {
      const newY = this.y + this.speed;
      if (newY <= this.game.map.height - this.height) {
        this.y = newY;
        this.facing.y = 1;
      }
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
      context.fillText(`facing: ${this.facing.x}, ${this.facing.y}`, this.x, this.y + 20)
      context.fillText(`speed: ${this.speed}`, this.x, this.y + 40)
    }
  }
}
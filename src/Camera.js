export default class Camera {
  constructor(game, x, y, width, height, lerp = 0.08) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.lerp = lerp
    this.offset = 20
  }

  update(target) {
    this.x += (target.x - this.x - this.width / 2) * this.lerp
    this.y += (target.y - this.y - this.height / 2) * this.lerp
  }

  draw(context) {
    context.strokeStyle = '#f00'
    context.strokeRect(this.x + this.offset, this.y + this.offset, this.width - this.offset * 2, this.height - this.offset * 2)

    if (this.game.debug) {
      context.fillStyle = '#fff'
      context.font = '12px Arial'
      context.fillText(`x: ${Math.round(this.x)}, y: ${Math.round(this.y)}`, this.x + this.offset + 5, this.y + this.offset * 2)
    }
  }
}
export default class Camera {
  constructor(game, x, y, width, height, lerp = 0.08) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.lerp = lerp
    this.offset = 20
    this.lookaheadDistance = 40
  }

  update(target) {
    let targetX = target.x - this.width / 2;
    let targetY = target.y - this.height / 2;
  
    if (target.facing) {
      targetX += target.facing.x * this.lookaheadDistance;
      targetY += target.facing.y * this.lookaheadDistance;
    }

    const t = this.lerp;
    this.x += (targetX - this.x) * t * (2 - t);
    this.y += (targetY - this.y) * t * (2 - t);
  
    // Clamp the camera position to the game world
    this.x = Math.max(0, Math.min(this.x, this.game.map.width - this.width));
    this.y = Math.max(0, Math.min(this.y, this.game.map.height - this.height));
  }

  draw(context) {
    if (this.game.debug) {
      context.strokeStyle = '#f00'
      context.strokeRect(this.x + this.offset, this.y + this.offset, this.width - this.offset * 2, this.height - this.offset * 2)
      context.fillStyle = '#fff'
      context.font = '12px Arial'
      context.fillText(`x: ${Math.round(this.x)}, y: ${Math.round(this.y)}`, this.x + this.offset + 10, this.y + this.offset * 2)
    }
  }
}
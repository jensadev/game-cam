import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Player from './Player.js'
import Camera from './Camera.js'

export default class Game {
  constructor(canvas, loader) {
    this.canvas = canvas
    this.map = {
      width: 32 * 100,
      height: 32 * 100,
    }
    this.loader = loader
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)

    this.keys = new Set()
    this.debug = false

    this.player = new Player(this, this.canvas.width / 2, this.canvas.height / 2)
    this.camera = new Camera(this, this.player.x - this.canvas.width / 2, this.player.y - this.canvas.height / 2, this.canvas.width, this.canvas.height)
    }

  update(deltaTime) {
    this.player.update(deltaTime)
    this.camera.update(this.player)
  }

  draw(context) {
    this.ui.draw(context)
    context.save();
    context.translate(-this.camera.x, -this.camera.y);
    this.drawGrid(context);
    this.camera.draw(context)
    this.player.draw(context)
    context.restore();
  }

  drawGrid(context) {
    const gridSize = 32;
    context.strokeStyle = '#000000'; // Grid color
    context.lineWidth = 0.5; // Line width
  
    // Draw vertical grid lines
    for (let x = 0; x <= this.map.width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, this.map.height);
      context.stroke();
    }
  
    // Draw horizontal grid lines
    for (let y = 0; y <= this.map.height; y += gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(this.map.width, y);
      context.stroke();
    }
  }
}

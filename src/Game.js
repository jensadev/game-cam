import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Player from './Player.js'
import Camera from './Camera.js'
import Start from './levels/Start.js'

export default class Game {
  constructor(canvas, loader) {
    this.canvas = canvas
    this.loader = loader
    this.level = new Start(this)
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)

    this.keys = new Set()
    this.debug = false

    this.player = new Player(this, this.canvas.width / 2, this.canvas.height / 2)
    this.camera = new Camera(this, this.player, this.player.x - this.canvas.width / 2, this.player.y - this.canvas.height / 2, this.canvas.width, this.canvas.height)
    }

  update(deltaTime) {
    this.player.update(deltaTime)
    if (this.keys.has('p')) {
      this.camera.setTarget({ x: 2000, y: 2000})
    } else {
      this.camera.setTarget(this.player)
    }
    this.camera.update()
  }

  draw(context) {
    this.ui.draw(context)
    context.save()
    context.translate(-this.camera.x, -this.camera.y)
    // if (this.debug) {
    //   this.drawGrid(context)
    // }
    this.camera.draw(context)
    this.player.draw(context)
    context.restore()
  }
}

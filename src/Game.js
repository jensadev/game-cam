import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Player from './Player.js'
import Camera from './Camera.js'

export default class Game {
  constructor(width, height, loader) {
    this.width = width
    this.height = height
    this.loader = loader
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)

    this.keys = new Set()
    this.debug = false

    this.player = new Player(this)
    this.camera = new Camera(this, this.player.x, this.player.y, this.width / 2, this.height / 2)
  }

  update(deltaTime) {
    this.player.update(deltaTime)
    this.camera.update(this.player)
  }

  draw(context) {
    this.ui.draw(context)
    this.player.draw(context)
    this.camera.draw(context)
  }
}

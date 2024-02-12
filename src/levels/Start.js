import Map from '../Map'

export default class Start extends Map {
  constructor(game) {
    super(game.loader.json.testmap)
    this.game = game
    this.tilemap = this.game.loader.json.testmap
    console.log(this.tilemap)
  }

  draw(context) {
    this.tilemap.layers[0].forEach(element => {
      
      
    });
  }

  drawGrid(context) {
    const gridSize = 32
    context.strokeStyle = '#000000' // Grid color
    context.lineWidth = 0.5 // Line width
  
    // Draw vertical grid lines
    for (let x = 0; x <= this.level.width; x += gridSize) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, this.level.height)
      context.stroke()
    }
  
    // Draw horizontal grid lines
    for (let y = 0; y <= this.level.height; y += gridSize) {
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(this.level.width, y)
      context.stroke()
    }
  }
}

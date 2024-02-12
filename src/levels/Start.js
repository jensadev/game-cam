import Map from '../Map'

export default class Start extends Map {
  constructor(game) {
    super(game.loader.json.testmap)
    this.game = game
    this.tilemap = this.game.loader.json.testmap
    console.log(this.tilemap)
    this.objects = this.tilemap.layers.find(layer => layer.name.toLowerCase().includes('object'))
    console.log(this.objects)
  }

  getPlayerStart() {
    const object = this.objects.objects.find(obj => obj.name.toLowerCase().includes('player'))
    console.log(object)
    return {
      x: object.x,
      y: object.y
    }
  }

  draw(context) {
    this.tilemap.layers[0].data.forEach((element, index) => {
      // Calculate the row and column based on the index
      let row = Math.floor(index / this.width);
      let col = index % this.width;

      // Calculate the x and y position of the rectangle
      let x = col * this.tileWidth;
      let y = row * this.tileHeight;

      // Draw the rectangle
      // context.strokeStyle = '#000000' // Grid color
      // context.lineWidth = 0.5 // Line width
      // context.beginPath()
      // context.moveTo(x, 0)
      // context.lineTo(x, this.tileHeight)
      // context.stroke()
      context.fillStyle = 'rgba(0, 0, 0, 0.5)'
      context.fillRect(x, y, this.tileWidth, this.tileHeight);
      context.font = `12px System-ui`
      context.textAlign = 'center'
      context.fillStyle = '#000'
      context.fillText(element, x + this.tileWidth / 2, y + this.tileHeight / 2)
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

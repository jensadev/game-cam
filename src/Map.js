export default class Map {
  constructor (tilemap) {
    this.width = tilemap.width
    this.height = tilemap.height
    this.tileWidth = tilemap.tilewidth
    this.tileHeight = tilemap.tileheight
  }
}

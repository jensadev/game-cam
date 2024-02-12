export default class Loader {
  constructor() {
    this.images = {}
    this.sounds = {}
    this.json = {}

    this.toLoad = 0
    this.loaded = 0
  }

  loadImages(images) {
    this.toLoad += images.length
    for (let image of images) {
      this.loadImage(image)
    }
  }

  loadImage(image) {
    const img = new Image()
    img.src = image.src
    img.onload = () => {
      this.images[image.name] = img
      this.loaded++
    }

    img.onerror = () => {
      console.error(`Failed to load image: ${image.src}`)
    }
  }

  loadSounds(sounds) {
    this.toLoad += sounds.length
    for (let sound of sounds) {
      this.loadSound(sound)
    }
  }

  loadSound(sound) {
    const audio = new Audio(sound.src)

    audio.oncanplaythrough = () => {
      console.log('loaded')
      this.sounds[sound.name] = audio
      this.loaded++
    }

    audio.onerror = () => {
      console.error(`Failed to load sound: ${sound.src}`)
    }
  }

  loadJSON(json) {
    this.toLoad += json.length
    for (let file of json) {
      this.loadFile(file)
    }
  }

  loadFile(file) {
    fetch(file.src)
      .then((response) => response.json())
      .then((data) => {
        this.json[file.name] = data
        this.loaded++
      }).catch((error) => {
        console.log(error)
        console.error(`Failed to load json: ${file.src}`)
      })
  }

  onReady(callback) {
    const interval = setInterval(() => {
      if (this.isReady()) {
        callback()
        clearInterval(interval)
      }
    }, 1000 / 60)
  }

  isReady() {
    console.log(`Loaded: ${this.loaded} files out of ${this.toLoad} files`)
    return this.loaded === this.toLoad
  }

  getImages() {
    return this.images
  }

  getSounds() {
    return this.sounds
  }

  getSound(name) {
    return this.sounds[name]
  }

  getJSON() {
    return this.json
  }
}

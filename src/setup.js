import Game from './Game'
import Loader from './Loader'

export function setup(canvas) {
  const ctx = canvas.getContext('2d')
  canvas.width = 854
  canvas.height = 480

  const loader = new Loader()
  loader.loadImages([
  ])
  loader.loadJSON([
    {name: "testmap", src: "./src/assets/tiled/test.tmj"}
  ])

  console.log(loader.isReady())
  
  const runGame = () => {
      const game = new Game(canvas, loader)
      let lastTime = 0

    const animate = (timeStamp) => {
      const deltaTime = timeStamp - lastTime
      lastTime = timeStamp
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      game.update(deltaTime)
      game.draw(ctx)
      requestAnimationFrame(animate)
    }

    animate(0)
  }

  loader.onReady(() => {
    console.log('Preloader finished')
    runGame()
  })
}
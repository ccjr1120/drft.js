import CanvasKitRenderer from './renderer/CanvasKit/index'
import DrftRenderer from './renderer/DrftRenderer'

class Drft {
  renderer: DrftRenderer

  constructor(options: { target: HTMLCanvasElement; renderer?: DrftRenderer }) {
    this.renderer = options.renderer
      ? options.renderer
      : new CanvasKitRenderer(options.target)
    this.renderer.renderDom = options.target
  }

  example() {
    this.renderer.example()
  }
}
export default Drft

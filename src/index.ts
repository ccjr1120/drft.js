import DrftRenderer, { CanvasKitRenderer } from './renderer/DrftRenderer'

class Drft {
  renderer: DrftRenderer

  constructor(options: {
    target: string | HTMLCanvasElement
    renderer?: DrftRenderer
  }) {
    this.renderer = options.renderer
      ? options.renderer
      : new CanvasKitRenderer()
  }
}
export default Drft

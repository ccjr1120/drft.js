import { SetupOptions } from './index.d'
import DrftRenderer, { CanvasKitRenderer } from './renderer/index'

class Drft {
  renderer: DrftRenderer
  renderDom: HTMLCanvasElement

  constructor() {}

  resizeCanvas() {
    const { clientWidth: width, clientHeight: height } = this.renderDom
    this.renderDom.width = width
    this.renderDom.height = height
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      const { clientWidth: width, clientHeight: height } = entry.target
      this.renderDom.width = width
      this.renderDom.height = height
    })
    resizeObserver.observe(this.renderDom)
  }

  async setup(options: SetupOptions) {
    this.renderDom = options.target
    this.resizeCanvas()
    if (options.renderer) {
      this.renderer = options.renderer
    } else {
      this.renderer = new CanvasKitRenderer()
    }
    await this.renderer.setup({ renderDom: options.target })
  }
}
export default Drft

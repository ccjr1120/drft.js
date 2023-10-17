import { RenderSetupOptions } from './index.d'
abstract class DrftRenderer {
  abstract renderDom: HTMLCanvasElement
  abstract setup(options: RenderSetupOptions): Promise<void> | void
}

export default DrftRenderer

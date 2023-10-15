import CanvasKitInit, {
  CanvasKit,
} from '../../../node_modules/canvaskit-wasm/types/index'
import DrftRenderer from '../DrftRenderer'

class CanvasKitRenderer extends DrftRenderer {
  CanvasKit: CanvasKit

  constructor() {
    super()
    CanvasKitInit().then((CanvasKit) => {
      console.log(this.CanvasKit)
      this.CanvasKit = CanvasKit
    })
  }
}

export default CanvasKitRenderer

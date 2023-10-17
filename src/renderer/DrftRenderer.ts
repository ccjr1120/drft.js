abstract class DrftRenderer {
  abstract renderDom: HTMLCanvasElement
  abstract example(): () => void
}

export default DrftRenderer

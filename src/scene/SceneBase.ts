import GraphicsTree from './graphicsTree/GraphicsTree'

let _globalLayerId = 0
const graphicsTree = new GraphicsTree()
export default class SceneBase {
  id = _globalLayerId++
  name: string
  constructor(name: string) {
    this.name = name
  }
  add() {}
}

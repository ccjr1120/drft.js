let _globalId = 1
export default class ElementBase {
  id = _globalId++
  type = this.constructor.name
}

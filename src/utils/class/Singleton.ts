export default class Singleton {
  static _instance: null | typeof this = null
  constructor() {
    if (Singleton._instance === null) {
      // Singleton._instance = this
    }
    // return Singleton._instance
  }
}

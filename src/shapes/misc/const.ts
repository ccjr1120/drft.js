import Rectangle from '../Rectangle'

export enum SHAPE_PRIMITIVE {
  // PATH = 'path',
  // COMPOUND_PATH = 'compoundPath',
  // POLYGON = 'polygon',
  RECTANGLE = 'rectangle'
}

export type Shape = Rectangle

export type SIZE = { width: number; height: number }
export type POINT = { x: number; y: number }

import { expect, test } from 'vitest'
import ElementBase from '../ElementBase'

test('id is increment', () => {
  expect(
    new ElementBase().id - new ElementBase().id - new ElementBase().id
  ).toBe(-4)
})

const sum = require('../sum')

test('subtraction', () => {
  expect(sum(1, -2)).toBe(-1)
})

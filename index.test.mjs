import assert from 'assert/strict'
import nonConstructibleChange from './index.mjs'

console.log('Starting tests.')
assert.equal(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]), 20)
assert.equal(nonConstructibleChange([1, 1, 1, 1, 1]), 6)
assert.equal(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]), 55)
assert.equal(nonConstructibleChange([1, 5]), 2)
assert.equal(nonConstructibleChange([5, 5, 4, 3, 2]), 1)
assert.equal(nonConstructibleChange([1, 1]), 3)
assert.equal(nonConstructibleChange([1]), 2)
assert.equal(nonConstructibleChange([10, 20, 30]), 1)
assert.equal(nonConstructibleChange([1, 10, 11, 12]), 2)
assert.equal(nonConstructibleChange([10, 11, 12, 13, 14]), 1)
assert.equal(nonConstructibleChange([1]), 2)
assert.equal(nonConstructibleChange([2]), 1)
console.log('All tests passed.')
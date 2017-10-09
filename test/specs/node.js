import isNode from '../../src/index.js'

describe('isNode()', () => {
    it('should return true', () => {
        expect(isNode()).toBe(true)
    })
})

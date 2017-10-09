import isNode from '../../src/index.js'

const nodeProcess = process

const browserify = () => {
    process = { ...nodeProcess, versions: null }
}

const nodify = () => {
    process = nodeProcess
}

describe('isNode()', () => {
    let nodeProcess = process
    beforeAll(browserify)
    afterAll(nodify)
    it('should return false', () => {
        expect(isNode()).toBe(false)
    })
})

import { add } from '../src/routes/add'

describe('add', () => {
    it('returns a list of links', () => {
        const res = add(4)
        expect(res.currentTotal).toBe(4)
    })
})
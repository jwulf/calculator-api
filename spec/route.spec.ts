import * as Route from '../src/routes/routes'

describe('add', () => {

    const add = Route.responseBuilder(Route.fns.addFn)
    it('returns a list of links', () => {
        const res = add(4)
        expect(res.currentTotal).toBe(4)
    })
})
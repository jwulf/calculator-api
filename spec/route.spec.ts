import * as Route from '../src/routes/routes'

console.log('asdfa')
describe('add', () => {
    const add = Route.responseBuilder(Route.fns.addFn)
    it('returns a list of links',
        () => expect(add(4).links.length).toBe(4))
    it('returns a currentTotal',
        () => expect(add(4).currentTotal).toBeTruthy())
    it('returns the correct current total for a single arg',
        () => expect(add(6).currentTotal).toBe(6))
    it('returns the correct current total for a two args',
        () => expect(add(6, 9).currentTotal).toBe(15)),
    it('returns a list of links with two args',
        () => expect(add(7, -8).links.length).toBe(4))
})

describe('subtract', () => {
    const subtract = Route.responseBuilder(Route.fns.subtractFn)
    it('returns a list of links',
        () => expect(subtract(4).links.length).toBe(4))
    it('returns a currentTotal',
        () => expect(subtract(4).currentTotal).toBeTruthy())
    it('returns the correct current total for a single arg',
        () => expect(subtract(6).currentTotal).toBe(6))
    it('returns the correct current total for a two args',
        () => expect(subtract(6, 9).currentTotal).toBe(6 - 9)),
    it('returns a list of links with two args',
        () => expect(subtract(7, -8).links.length).toBe(4))
})
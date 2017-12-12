import * as Route from '../src/routes/routes'

console.log('asdfa')
describe('add', () => {
    const add = Route.responseBuilder(Route.addFn)
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
    const subtract = Route.responseBuilder(Route.subtractFn)
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

describe('divide', () => {
    const divide = Route.responseBuilder(Route.divideFn)
    it('returns a list of links',
        () => expect(divide(4).links.length).toBe(4))
    it('returns a currentTotal',
        () => expect(divide(4).currentTotal).toBeTruthy())
    it('returns the correct current total for a single arg',
        () => expect(divide(6).currentTotal).toBe(6))
    it('returns the correct current total for a two args',
        () => expect(divide(9, 3.5).currentTotal).toBe(9 / 3.5)),
    it('returns a list of links with two args',
        () => expect(divide(7, -8).links.length).toBe(4))
})

describe('multiply', () => {
    const multiply = Route.responseBuilder(Route.multiplyFn)
    it('returns a list of links',
        () => expect(multiply(4).links.length).toBe(4))
    it('returns a currentTotal',
        () => expect(multiply(4).currentTotal).toBeTruthy())
    it('returns the correct current total for a single arg',
        () => expect(multiply(6).currentTotal).toBe(6))
    it('returns the correct current total for a two args',
        () => expect(multiply(9, 3.5).currentTotal).toBe(9 * 3.5)),
    it('returns a list of links with two args',
        () => expect(multiply(7, -8).links.length).toBe(4))
})
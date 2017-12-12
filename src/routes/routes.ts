import * as express from 'express'
import { HATEOASResponder, HATEOASResponse, MutationFn } from '../types'
import { RoutePaths } from './route-paths'
import { buildHATEOASURLs } from './hateoas-builder'

export const addFn = (x: number, y = 0) => x + y
export const divideFn = (x: number, y = 1) => x / y
export const multiplyFn = (x: number, y = 1) => x * y
export const subtractFn = (x: number, y = 0) => x - y

const routeBuilder = (buildResponse: HATEOASResponder) => (req: express.Request, res: express.Response) => {
    const { x , y } = req.params
    res.send(buildResponse(x, y))
}

export const responseBuilder = (fn: MutationFn) => (x = 0, y?: number) => buildHATEOASURLs(fn(x, y))

export const addRoute = routeBuilder(responseBuilder(addFn))
export const divideRoute = routeBuilder(responseBuilder(divideFn))
export const multiplyRoute = routeBuilder(responseBuilder(multiplyFn))
export const subtractRoute = routeBuilder(responseBuilder(subtractFn))

// For testing
export const fns = {
    addFn,
    subtractFn,
    multiplyFn,
    divideFn
}
import * as express from 'express'
import { HATEOASResponder, HATEOASResponse, MutationFn } from '../types'
import { RoutePaths } from './route-paths'

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

export function buildHATEOASURLs(currentTotal: number): HATEOASResponse {
  return {
    currentTotal,
    links: [
      {
        rel: 'add',
        href: `${RoutePaths.add}/${currentTotal}/`,
        type: 'GET'
      },
      {
        rel: 'subtract',
        href: `${RoutePaths.subtract}/${currentTotal}/`,
        type: 'GET'
      },
      {
        rel: 'multiply',
        href: `${RoutePaths.multiply}/${currentTotal}/`,
        type: 'GET'
      },
      {
        rel: 'divide',
        href: `${RoutePaths.divide}/${currentTotal}/`,
        type: 'GET'
      }
    ]
  }
}

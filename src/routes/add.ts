import * as express from 'express'
import { RoutePaths } from './route-paths'
import { buildHATEOASURLs } from '../util/hateoas-builder'

export function addRoute(req: express.Request, res: express.Response) {
    const { x, y } = req.params
    res.send(add(x, y))
}

export function add(x: number, y?: number) {
    const currentTotal = y ? x + y : x
    const links = buildHATEOASURLs(currentTotal)
    const response = {
        currentTotal,
        links
    }
    return response
}

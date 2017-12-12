import * as express from 'express'
import { RouteConfig } from './route-config'

export const buildRouteHandler = HATEOASResponder => (req, res) => res.send(HATEOASResponder(req.params.x, req.params.y))

export const buildHATEOASResponder = fn => (x = 0, y?) => buildHATEOASResponse(fn(x, y))

function buildHATEOASResponse(currentTotal) {
    const links: any[] = []
    RouteConfig.forEach(route =>
        links.push({
            rel: route.rel,
            href: `${route.href}/${currentTotal}/`,
            type: 'GET'
        }))
    return {
        currentTotal,
        links
    }
}
import { RouteConfig } from './route-config'

export const buildRouteHandler = HATEOASResponder => (req, res) => {
    const { x, y } = req.params
    const numX = x ? parseFloat(x) : undefined
    const numY = y ? parseFloat(y) : undefined
    if ((numX !== undefined && isNaN(numX)) || (numY !== undefined && isNaN(numY))) {
        res.status(400)
        return res.send('Invalid input')
    }
    res.send(HATEOASResponder(numX, numY))
}

export const buildHATEOASResponder = fn => (x = 0, y?) => buildHATEOASResponse(fn(x, y))

function buildHATEOASResponse(currentTotal) {
    const links: any[] = []
    RouteConfig.forEach(route =>
        links.push({
            rel: route.rel,
            href: `${route.href}/${currentTotal}`,
            type: 'GET'
        }))
    return {
        currentTotal,
        links
    }
}
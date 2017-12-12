import { buildHATEOASResponder, buildRouteHandler } from './route-logic'
import { RouteConfig } from './route-config'

export const Routes = RouteConfig.map(route => ({
    href: route.href,
    response: buildHATEOASResponder(route.fn),
    handler: buildRouteHandler(buildHATEOASResponder(route.fn))
}))
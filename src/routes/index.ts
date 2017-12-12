import { buildHATEOASResponder, buildRouteHandler } from './route-logic'
import { RouteConfig } from './route-config'

export const Routes = RouteConfig.map(route => ({
    href: route.href,
    handler: buildRouteHandler(buildHATEOASResponder(route.fn))
}))
import { RoutePaths } from '../routes/route-paths'

export function buildURLs(currentTotal = 0) {
    return [
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
            href: `${RoutePaths.divide}/${currentTotal}`,
            type: 'GET'
        }
    ]
}
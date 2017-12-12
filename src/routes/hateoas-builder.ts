import { HATEOASResponse, MutationFn } from '../types'
import { RoutePaths } from '../routes/route-paths'

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

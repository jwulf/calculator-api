import * as express from 'express'
import * as routeCache from 'route-cache'
import { addRoute, subtractRoute, multiplyRoute, divideRoute} from './routes/routes'
import { RoutePaths } from './routes/route-paths'

const app = express()

const CACHE_SECONDS = 60

app.use(express.static('www'))

app.get(`${RoutePaths.add}:x/:y?`, routeCache.cacheSeconds(CACHE_SECONDS), addRoute)
app.get(`${RoutePaths.subtract}/:x/:y?`, routeCache.cacheSeconds(CACHE_SECONDS), subtractRoute)
app.get(`${RoutePaths.multiply}/:x:y?`, routeCache.cacheSeconds(CACHE_SECONDS), multiplyRoute)
app.get(`${RoutePaths.divide}/:x/:y?`, routeCache.cacheSeconds(CACHE_SECONDS), divideRoute)

app.listen(3000, () => console.log('Listening on Port 3000'))

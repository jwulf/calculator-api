import * as express from 'express'
import * as routeCache from 'route-cache'
import { Routes } from './routes'

const CACHE_SECONDS = 60

const app = express()

app.use(express.static('www'))

Routes.forEach(route =>
    app.get(
        `${route.href}/:x/:y?`,
        routeCache.cacheSeconds(CACHE_SECONDS),
        route.handler))

app.listen(3000, () => console.log('Listening on Port 3000'))
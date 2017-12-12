import * as express from 'express'
import * as routeCache from 'route-cache'
import { addRoute } from './routes/add'
import { subtractRoute } from './routes/subtract'
import { multiplyRoute } from './routes/multiply'
import { divideRoute } from './routes/divide'

const app = express()

const CACHE_SECONDS = 60
const cache = routeCache.cacheSeconds(CACHE_SECONDS)

app.use(express.static('www'))

app.get('/add/:x/:y?', routeCache.cacheSeconds(CACHE_SECONDS), addRoute)
app.get('/subtract/:x/:y?', routeCache.cacheSeconds(CACHE_SECONDS), subtractRoute)
app.get('/multiply/:x:y?', routeCache.cacheSeconds(CACHE_SECONDS), multiplyRoute)
app.get('/divide/:x/:y?', routeCache.cacheSeconds(CACHE_SECONDS), divideRoute)

app.listen(3000, () => console.log('Listening on Port 3000'))

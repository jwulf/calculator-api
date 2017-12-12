import * as express from 'express'
import { addRoute } from './routes/add'
import { subtractRoute } from './routes/subtract'
import { multiplyRoute } from './routes/multiply'
import { divideRoute } from './routes/divide';

const app = express()

app.use(express.static('www'))

app.get('/add/:x/:y?', addRoute)
app.get('/subtract/:x/:y?', subtractRoute)
app.get('/multiply/:x:y?', multiplyRoute)
app.get('/divide/:x/:y?', divideRoute)

app.listen(3000, () => console.log('Listening on Port 3000'))

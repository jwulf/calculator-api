import * as express from 'express';

const app = express();

app.use(express.static('www'));
app.listen(3000, () => console.log('Listening on Port 3000'));
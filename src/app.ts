import express from 'express';
import routes from './routes';
import connect from './connection/database';

const app = express();
const port = 5000;

routes(app)

//ConnectDb
connect()

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
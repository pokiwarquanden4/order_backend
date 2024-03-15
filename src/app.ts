import express from 'express';
import routes from './routes';

const app = express();
const port = 5000;

routes(app)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
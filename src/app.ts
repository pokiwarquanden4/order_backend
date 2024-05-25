import express from 'express';
import routes from './routes';
import connect from './connection/database';
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

routes(app)

//ConnectDb
connect()

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
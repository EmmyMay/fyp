import './config.mjs'
import express from 'express'
import fyp from './router/index.mjs';
import DB_CONNECTION from '../database/db_connect.js'
import morgan from 'morgan';



const app = express();
app.use(express.json()); //this is the build in express body-parser 
app.use( //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
);
const port = 8080;


app.use(morgan('tiny'));
morgan.token('host', function (req, res) {
  return req.hostname;
});
DB_CONNECTION.connection.once('open', function () {
  console.log({
    msg: "Database connection opened"
  });
})
app.use('/fyp', fyp);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.listen(port, () => console.log(`app now listening on ${port} `))
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app = express();
import fyp from './router/index.mjs';
import DB_CONNECTION from '../database/db_connect.js'



DB_CONNECTION.connection.once('open', function () {
  console.log({ msg: "Database connection opened" });  
})
app.use('/fyp', fyp);
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
export default app;
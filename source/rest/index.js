import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoAPI from './routes/todo.controller.js';

const APP = express();
const PORT = 3650;

APP.use(bodyParser.json({limit: '50mb'}));
APP.use(cors({
  origin: 'http://localhost:3000',
}));
APP.use(todoAPI);

APP.listen(PORT, () => {
  console.log(`cas-fee-todo API listening at http://localhost:${PORT}`);
});

import express, { Express, Response, Request, NextFunction } from 'express';

import { env } from './utils/validateEnv';
import { corsMiddleware } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound.middleware';
import { errorHandler } from './middleware/errorHandler.middleware';
import { connectToDB } from './config/dbConnect';

const app: Express = express();

const PORT = env.EXPRESS_PORT;
const MongoURL = env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello From Docker');
});

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToDB(MongoURL);
  console.log(`Server Is Running On Port: ${PORT}`);
});

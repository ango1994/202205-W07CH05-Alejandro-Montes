import express from 'express';
import morgan from 'morgan';
import { robotsRouter } from './router/robots.js';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/robots', robotsRouter);

// app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
//     req;

//     next;
//     console.log(error.message);
//     resp.status(500), resp.end(JSON.stringify({ error: error.message }));
// });

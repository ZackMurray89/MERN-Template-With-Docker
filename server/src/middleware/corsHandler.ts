import cors, { CorsOptions } from 'cors';

import { env } from '../utils/validateEnv';

const allowedOrigins = env.VITE_ORIGIN;

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed By CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export const corsMiddleware = cors(corsOptions);

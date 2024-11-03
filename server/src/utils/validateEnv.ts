import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  EXPRESS_PORT: z.string().transform(Number).default('3000'),
  VITE_PORT: z.string().transform(Number).default('5173'),
  MONGO_PORT: z.string().transform(Number).default('27017'),
  MONGO_URL: z.string().url(),
  VITE_ORIGIN: z.string(),
  FRONTEND_URL: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    `Environment Varibles Are Not Set Up Properly: ${parsedEnv.error.format()}`
  );

  process.exit(1);
}

export const env = parsedEnv.data;

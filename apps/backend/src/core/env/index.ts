import 'dotenv/config'; 
import { z } from 'zod'; 

const envSchema = z.object({

	NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
	POSTGRESQL_USERNAME: z.string(),
	POSTGRESQL_PASSWORD: z.string(),
	POSTGRESQL_DATABASE: z.string(),
	PORT: z.coerce.number().default(3333) 
	// JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env); // tenta validar process.env para ver se tem as exatas informações dentro

if (_env.success === false) {
	console.error('Invalid environment variables',
		_env.error.format()); // formata todos os erros ali

	throw new Error('Invalid environment variables'); 
}

process.env.DATABASE_URL=`postgresql://${process.env.POSTGRESQL_USERNAME}:${process.env.POSTGRESQL_PASSWORD}@localhost:5432/${process.env.POSTGRESQL_DATABASE}?schema=public`

export const env = _env.data;
import 'dotenv/config'; 
import { z } from 'zod'; 

const envSchema = z.object({

	NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
	POSTGRESQL_USERNAME: z.string(),
	POSTGRESQL_PASSWORD: z.string(),
	POSTGRESQL_DATABASE: z.string(),
	DATABASE_URL: z.string().optional(),
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string(),
	//REDIRECT_URL: z.string().optional(),
	PORT: z.coerce.number().default(3333), 
	JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env); // tenta validar process.env para ver se tem as exatas informações dentro

if (_env.success === false) {
	console.error('Invalid environment variables',
		_env.error.format()); // formata todos os erros ali

	throw new Error('Invalid environment variables'); 
}

const {POSTGRESQL_USERNAME, POSTGRESQL_PASSWORD, POSTGRESQL_DATABASE, DATABASE_URL, GITHUB_URL, GITHUB_ID, GITHUB_SECRET} = process.env

if (POSTGRESQL_USERNAME && POSTGRESQL_PASSWORD && POSTGRESQL_DATABASE)
	process.env.DATABASE_URL=`postgresql://${process.env.POSTGRESQL_USERNAME}:${process.env.POSTGRESQL_PASSWORD}@localhost:5432/${process.env.POSTGRESQL_DATABASE}?schema=public`

if (!process.env.DATABASE_URL)
	throw new Error('Invalid environment variables'); 

console.log("Environment Variables: valid")
export const env = _env.data;
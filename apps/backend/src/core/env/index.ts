import 'dotenv/config'; // carrega as variaveis ambiente
import { z } from 'zod'; // contem as validações

const envSchema = z.object({

	NODE_ENV: z.enum(['dev', 'test', 'production']) // deve ser igual a uma dessas variaveis
		.default('dev'), // caso nao informado, vira dev 

	// JWT_SECRET: z.string(),

	PORT: z.coerce.number() // converte valor para um numero
		.default(3333) // valor padrao: 3333
});

const _env = envSchema.safeParse(process.env); // tenta validar process.env para ver se tem as exatas informações dentro

if (_env.success === false) {
	console.error('Invalid environment variables',
		_env.error.format()); // formata todos os erros ali

	throw new Error('Invalid environment variables'); // derruba aplicação
}

export const env = _env.data; // caso sucesso, exporta conteudo
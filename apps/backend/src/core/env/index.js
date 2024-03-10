"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
var zod_1 = require("zod");
var envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['dev', 'test', 'production']).default('dev'),
    POSTGRESQL_USERNAME: zod_1.z.string(),
    POSTGRESQL_PASSWORD: zod_1.z.string(),
    POSTGRESQL_DATABASE: zod_1.z.string(),
    DATABASE_URL: zod_1.z.string().optional(),
    PORT: zod_1.z.coerce.number().default(3333),
    JWT_SECRET: zod_1.z.string(),
    //AWS_ACCESS_KEY_ID: z.string(),
    //AWS_SECRET_ACCESS_KEY: z.string(),
    //AWS_BUCKET_NAME: z.string(),
});
var _env = envSchema.safeParse(process.env); // tenta validar process.env para ver se tem as exatas informações dentro
if (_env.success === false) {
    console.error('Invalid enviroment variables', _env.error.format()); // formata todos os erros ali
    throw new Error('Invalid enviroment variables');
}
var _a = process.env, POSTGRESQL_USERNAME = _a.POSTGRESQL_USERNAME, POSTGRESQL_PASSWORD = _a.POSTGRESQL_PASSWORD, POSTGRESQL_DATABASE = _a.POSTGRESQL_DATABASE, DATABASE_URL = _a.DATABASE_URL;
if (POSTGRESQL_USERNAME && POSTGRESQL_PASSWORD && POSTGRESQL_DATABASE)
    process.env.DATABASE_URL = "postgresql://".concat(process.env.POSTGRESQL_USERNAME, ":").concat(process.env.POSTGRESQL_PASSWORD, "@localhost:5432/").concat(process.env.POSTGRESQL_DATABASE, "?schema=public");
if (!process.env.DATABASE_URL)
    throw new Error('Invalid environment variables');
console.log("Environment Variables: valid");
exports.env = _env.data;

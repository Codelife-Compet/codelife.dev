import 'dotenv/config'

import { randomUUID } from 'node:crypto'
import { exec, execSync } from 'node:child_process'
import { Environment } from 'vitest'
import { PrismaClient } from '@prisma/client'
// postgresql://docker:docker@localhost:5432/apisolid?schema=public

const prisma = new PrismaClient()

function generateDatabaseURL(schema: string) {
    if (!process.env.DATABASE_URL)
        throw new Error('Please provide a DATABASE_URL environment variable')

    const url = new URL(process.env.DATABASE_URL)

    url.searchParams.set('schema', schema)

    return url.toString()
}

export default <Environment>{
    name: 'web',
    transformMode: 'web', // Add the missing transformMode property
    async setup() { // qual codigo quero executar antes de cada arquivo de testes

        const schema = randomUUID()
        const databaseURL = generateDatabaseURL(schema)

        process.env.DATABASE_URL = databaseURL

        execSync('npx prisma migrate deploy') // abra a pasta migrations e execute cada SQL (n verifica novidades)

        return {
            async teardown() { // executado após testes serem executados
                await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`) // tudo que for criado pelo schema será apagado junto
                await prisma.$disconnect()
            }
        }
    }
}
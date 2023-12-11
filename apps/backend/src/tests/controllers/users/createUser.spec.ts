import request from 'supertest'
import { app } from '@/core/app'
import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'

test('Create Check-in (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to create a user', async () => {

        const response = await request(app.server)
            .post('/user/create')
            .send({
                user: {
                    name: "test_name",
                    email: "test_email@example.com",
                },
                account: {
                    provider: "google",
                    type: "oauth",
                    providerAccountId: "xxxxxx"
                }
            })

        console.dir({body: response.body}, {depth: null})

        expect(response.statusCode).toEqual(201)
    })
})
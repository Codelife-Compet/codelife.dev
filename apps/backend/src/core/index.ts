import { app } from "./app";
import { prisma } from "./db/prisma";
import { env } from "./env";

async function testPrismaConnection() {
    try {
        await prisma.$connect();
		await prisma.$disconnect();
        console.log("Prisma: connected");
    } catch (error) {
        console.error("Prisma connection failed:", error);
        process.exit(1); // Exit the process with an error code
    }
}

async function startServer() {
    try {
        await app.listen({
            host: "0.0.0.0",
            port: env.PORT,
        });

        console.log("Backend: Running on http://localhost:" + env.PORT);

        await testPrismaConnection();

    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1); // Exit the process with an error code
    }
}

startServer();

import { ALLOWED_ORIGINS } from "@/config/env";
import { type FastifyInstance } from "fastify";

export function registerPlugins(fastify: FastifyInstance) {
    fastify.register(import("@fastify/cookie"));

    fastify.register(import("@fastify/cors"), {
        credentials: true,
        origin: (origin, callback) => {
            if (ALLOWED_ORIGINS.includes(origin!)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed"), false);
            }
        }
    });

    fastify.register(import("@fastify/rate-limit"), {
        ban: 5,
        max: 100,
        timeWindow: "1 minute"
    });
}

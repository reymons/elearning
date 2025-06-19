import Fastify from "fastify";
import { registerPlugins } from "./plugins";

export async function buildServer() {
    const fastify = Fastify({
        logger: true,
    });

    registerPlugins(fastify);

    return fastify;
}

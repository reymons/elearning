import path from "path";
import fs from "fs";
import Fastify, { type FastifyServerOptions } from "fastify";
import { registerPlugins } from "./plugins";
import { MODE } from "@/config/env";

export async function buildServer() {
    const opts: FastifyServerOptions = {
        logger: true,
    };
    if (MODE === "dev") {
        (opts as any).https = {
            key: fs.readFileSync(path.join(__dirname, "tls", "key.pem")),
            cert: fs.readFileSync(path.join(__dirname, "tls", "cert.pem")),
        };
    }

    const fastify = Fastify(opts);

    registerPlugins(fastify);

    return fastify;
}

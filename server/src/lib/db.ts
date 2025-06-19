import { DB } from "@/config/env";
import pgPromise from "pg-promise";

export const db = pgPromise()({
    host: DB.HOST,
    port: DB.PORT,
    database: DB.NAME,
    user: DB.USER,
    password: DB.PASSWORD,
});


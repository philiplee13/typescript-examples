import { Pool } from "pg";
import { config } from "dotenv";

config(); // load config

interface dbconfig {
    user: string;
    password: string;
    port: number;
    host: string;
    ssl?: boolean;
}

const createPool = (dbconfig: dbconfig): Pool => {
    const pool = new Pool({
        user: dbconfig.user,
        host: dbconfig.host,
        password: dbconfig.password,
        port: dbconfig.port,
    });
    return pool;
};

const dbconfig: dbconfig = {
    user: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    port: parseInt(process.env.DB_PORT || ""), // this is funky, prob do something else here
    host: process.env.DB_HOST || "",
};

export const pool = createPool(dbconfig);

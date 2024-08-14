import { Pool } from "pg"

interface config {
    user: string;
    password: string;
    port: number;
    host: string;
    ssl?: boolean;
};

const createPool = (dbconfig: config): Pool => {
    const pool = new Pool({
        user: dbconfig.user,
        host: dbconfig.host,
        password: dbconfig.password,
        port: dbconfig.port
    });
    return pool;
}



const dbconfig: config = {
    user: "postgres",
    password: "postgres",
    port: 5432,
    host: "localhost",
};

export const pool = createPool(dbconfig);
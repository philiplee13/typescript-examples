"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
;
const createPool = (dbconfig) => {
    const pool = new pg_1.Pool({
        user: dbconfig.user,
        host: dbconfig.host,
        password: dbconfig.password,
        port: dbconfig.port
    });
    return pool;
};
const dbconfig = {
    user: "postgres",
    password: "postgres",
    port: 5432,
    host: "localhost",
};
exports.pool = createPool(dbconfig);

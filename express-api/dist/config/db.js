"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // load config
const createPool = (dbconfig) => {
    const pool = new pg_1.Pool({
        user: dbconfig.user,
        host: dbconfig.host,
        password: dbconfig.password,
        port: dbconfig.port,
    });
    return pool;
};
const dbconfig = {
    user: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    port: parseInt(process.env.DB_PORT || ""), // this is funky, prob do something else here
    host: process.env.DB_HOST || "",
};
exports.pool = createPool(dbconfig);

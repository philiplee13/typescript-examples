import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from "path";

const getConfig = (): TypeOrmModuleOptions => {
    return {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        synchronize: false,
        entities: [path.join(__dirname, "../modules/**/*.entity.{ts,js}")],
        logging: "all",
    };
};

export default getConfig();
// figure out multiple data sources
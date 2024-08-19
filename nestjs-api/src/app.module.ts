import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/users/users.module";
import config from "./config/db-config"
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot(config as TypeOrmModuleOptions),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }

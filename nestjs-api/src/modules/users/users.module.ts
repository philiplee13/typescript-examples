import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersEntity } from "./users.entity";
import { UserService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserRepository } from "./users.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
    ],
    controllers: [UsersController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule { }

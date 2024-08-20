import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserService } from "./modules/users/users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsersEntity } from "./modules/users/users.entity";
import { Repository } from "typeorm";

describe("AppController", () => {
    let appController: AppController;
    let userService: UserService;
    let userRepo: Repository<UsersEntity>;


    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService, UserService, {
                provide: getRepositoryToken(UsersEntity),
                useValue: {
                }
            }], // need to find a way to mock userservice here
        }).compile();

        appController = app.get<AppController>(AppController);
        userService = app.get<UserService>(UserService);
        userRepo = app.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity))
    });

    describe("root", () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe("Hello World!");
        });
    });
});

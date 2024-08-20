import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserService } from "./modules/users/users.service";

@Controller("app")
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // DI from another service into this one
    // basically
    // export the service from the created module
    // and import the service into the using one
    // then add in constructor
    @Get("/users")
    async getUsersFromApp() {
        console.log("inside of get users within app controller")
        return this.userService.findAll();
    }
}

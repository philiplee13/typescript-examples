import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CustomResponse } from '../common/responses/responses.model';
import { UsersEntity } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }

    @Get()
    index(): Promise<CustomResponse> {
        return this.userService.findAll();
    }

    @Post()
    // should prob have a diff entity here?
    async create(@Body() userData: UsersEntity): Promise<CustomResponse> {
        return this.userService.create(userData);
    }

    @Delete(":id")
    async delete(@Param("id") userId: string): Promise<CustomResponse> {
        return this.userService.delete(userId)
    }
}
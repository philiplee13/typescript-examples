import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CustomResponse } from '../common/responses/responses.model';
import { UsersEntity } from './users.entity';
// import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
// @ApiTags('user')
@Controller('user')
export class UsersController {
    /**
     *
     * @param {UserService} userService
     */
    constructor(private userService: UserService) { }

    @Get()
    index(): Promise<CustomResponse> {
        return this.userService.findAll();
    }

    @Post()
    // should prob have a diff entity here?
    async create(@Body() userData: UsersEntity): Promise<UsersEntity> {
        return this.userService.create(userData);
    }
}
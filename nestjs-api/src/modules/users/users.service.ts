import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { CustomResponse } from "../common/responses/responses.model";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>
    ) { }

    async findAll(): Promise<CustomResponse> {
        console.log('inside of find all')
        try {
            const response = await this.usersRepository.find()
            return new CustomResponse({
                message: "Get all",
                responseCode: 200,
                data: response
            });
        } catch (error) {
            return error
        }
    }

    async create(entry: UsersEntity) {
        console.log('inside of create')
        try {
            return await this.usersRepository.save(entry);
        } catch (err) {
            return err;
        }
    }

    // async deleteOne(categoryId: string) {
    //     try {
    //         return await this.categoryRepository.removeById(categoryId);
    //     } catch (err) {
    //         return err;
    //     }
    // }
}

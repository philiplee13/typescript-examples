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
        try {
            const response = await this.usersRepository.insert(entry);
            return new CustomResponse({
                message: `created user with user id ${entry.user_id}`,
                responseCode: 200,
                data: response.raw
            });
        } catch (err) {
            return err;
        }
    }

    async delete(userId: string) {
        try {
            const repsonse = await this.usersRepository.delete({ "user_id": userId })
            return new CustomResponse({
                message: `Deleted user with id of ${userId}`,
                responseCode: 200
            });
        } catch (err) {
            return err;
        }
    }
}

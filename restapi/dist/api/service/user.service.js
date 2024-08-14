"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_models_1 = require("../models/user.models");
const db_1 = require("../../config/db");
const response_model_1 = require("../models/responses/response.model");
class UserService {
    async getUsers() {
        const result = await db_1.pool.query("SELECT * FROM users.user;");
        const users = result.rows;
        const userList = (0, user_models_1.mapUsers)(users);
        const response = new response_model_1.CustomResponse({
            message: "Successfully got all users",
            responseCode: 200,
            data: userList
        });
        return response;
    }
    ;
    async addUser(user) {
        const result = await db_1.pool.query(`INSERT INTO users.user (name, age) VALUES ($1, $2) returning user_id;`, [user.name, user.age]);
        if (result.rowCount === 1) {
            console.log(`Successfully created user with name ${user.name}`);
            const response = new response_model_1.CustomResponse({
                message: `Successfully created user with name ${user.name}`,
                responseCode: 200
            });
            return response;
        }
        return new response_model_1.CustomResponse({
            message: `Could not add user with name ${user.name}`,
            responseCode: 500
        });
    }
    async deleteUser(userId) {
        const result = await db_1.pool.query(`DELETE FROM users.user WHERE user_id = $1`, [userId]);
        if (result.rowCount === 1) {
            console.log(`Successfully deleted user with userId ${userId}`);
            const response = new response_model_1.CustomResponse({
                message: `Successfully deleted user ${userId}`,
                responseCode: 200
            });
            return response;
        }
        ;
        return new response_model_1.CustomResponse({
            message: `Could not delete user with userId of ${userId}`,
            responseCode: 500
        });
    }
    async updateUser(body) {
        const result = await db_1.pool.query(`UPDATE users.user SET name = $1, age = $2 WHERE user_id = $3`, [body.name, body.age, body.userId]);
        if (result.rowCount === 1) {
            const response = new response_model_1.CustomResponse({
                message: `Successfully updated user`,
                responseCode: 200
            });
            return response;
        }
        ;
        return new response_model_1.CustomResponse({
            message: `Did not update user`,
            responseCode: 500
        });
    }
    ;
}
exports.userService = new UserService();

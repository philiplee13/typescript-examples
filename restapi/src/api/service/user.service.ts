import { User, mapUsers } from "../models/user.models";
import { pool } from "../../config/db";
import { CustomResponse } from "../models/responses/response.model";

interface UserServiceInterface {
    getUsers(): Promise<CustomResponse>;
    addUser(body: User): Promise<CustomResponse>;
    deleteUser(userId: number): Promise<CustomResponse>;
    updateUser(body: User): Promise<CustomResponse>;
}

class UserService implements UserServiceInterface {
    async getUsers(): Promise<CustomResponse> {
        try {
            const result = await pool.query("SELECT * FROM users.user;");
            const users: User[] = result.rows;
            const userList = mapUsers(users);
            const response = new CustomResponse({
                message: "Successfully got all users",
                responseCode: 200,
                data: userList
            });
            return response;
        } catch (error) {
            return new CustomResponse({
                message: `Error happened ${error}`,
                responseCode: 500
            });
        }
    };

    async addUser(user: User): Promise<CustomResponse> {
        try {
            const result = await pool.query(
                `INSERT users.user (name, age) VALUES ($1, $2) returning user_id;`,
                [user.name, user.age]);

            if (result.rowCount === 1) {
                console.log(`Successfully created user with name ${user.name}`);
                const response = new CustomResponse({
                    message: `Successfully created user with name ${user.name}`,
                    responseCode: 200
                })
                return response;
            }

            // prob needs to be a check before anything happens like PK validation
            return new CustomResponse({
                message: `Could not add user with name ${user.name}`,
                responseCode: 500
            });

        } catch (error) {
            return new CustomResponse({
                message: `Error happened when trying to add user ${error}`,
                responseCode: 500
            });
        }
    }

    async deleteUser(userId: number): Promise<CustomResponse> {
        const result = await pool.query(
            `DELETE FROM users.user WHERE user_id = $1`, [userId]
        );

        if (result.rowCount === 1) {
            console.log(`Successfully deleted user with userId ${userId}`);
            const response = new CustomResponse({
                message: `Successfully deleted user ${userId}`,
                responseCode: 200
            });
            return response
        };

        return new CustomResponse({
            message: `Could not delete user with userId of ${userId}`,
            responseCode: 500
        });
    }

    async updateUser(body: User): Promise<CustomResponse> {
        const result = await pool.query(
            `UPDATE users.user SET name = $1, age = $2 WHERE user_id = $3`,
            [body.name, body.age, body.userId]
        );

        if (result.rowCount === 1) {
            const response = new CustomResponse({
                message: `Successfully updated user`,
                responseCode: 200
            });
            return response;
        };

        return new CustomResponse({
            message: `Did not update user`,
            responseCode: 500
        });
    };


}

export const userService = new UserService();


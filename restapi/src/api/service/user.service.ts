import { User, mapUsers } from "../models/user.models";
import { pool } from "../../config/db";

interface UserServiceInterface {
    getUsers(): Promise<User[]>;
    addUser(body: User): Promise<boolean>;
    deleteUser(userId: number): Promise<boolean>;
}

class UserService implements UserServiceInterface {
    async getUsers(): Promise<User[]> {
        const result = await pool.query("SELECT * FROM users.user;");
        const users: User[] = result.rows;
        const userList = mapUsers(users);
        return userList;
    };

    async addUser(user: User): Promise<boolean> {
        const result = await pool.query(
            `INSERT INTO users.user (name, age) VALUES ($1, $2) returning user_id;`,
            [user.name, user.age]);

        if (result.rowCount === 1) {
            console.log(`Successfully created user with name ${user.name}`);
            return true; // in general return custom response object here
            // like a class with description, user details entered, etc
            // but for now this is fine
        }
        return false;
    }

    async deleteUser(userId: number): Promise<boolean> {
        const result = await pool.query(
            `DELETE FROM users.user WHERE user_id = $1`, [userId]
        );

        if (result.rowCount === 1) {
            console.log(`Successfully deleted user with userId ${userId}`);
            return true;
        };
        console.log(`No user with ${userId} was found`);
        return false;
    }


}

export const userService = new UserService();


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_models_1 = require("../models/user.models");
const db_1 = require("../../config/db");
class UserService {
    async getUsers() {
        const result = await db_1.pool.query("SELECT * FROM users.user;");
        const users = result.rows;
        const userList = (0, user_models_1.mapUsers)(users);
        return userList;
    }
    ;
    async addUser(user) {
        const result = await db_1.pool.query(`INSERT INTO users.user (name, age) VALUES ($1, $2) returning user_id;`, [user.name, user.age]);
        if (result.rowCount === 1) {
            console.log(`Successfully created user with name ${user.name}`);
            return true; // in general return custom response object here
            // like a class with description, user details entered, etc
            // but for now this is fine
        }
        return false;
    }
    async deleteUser(userId) {
        const result = await db_1.pool.query(`DELETE FROM users.user WHERE user_id = $1`, [userId]);
        if (result.rowCount === 1) {
            console.log(`Successfully deleted user with userId ${userId}`);
            return true;
        }
        ;
        console.log(`No user with ${userId} was found`);
        return false;
    }
}
exports.userService = new UserService();

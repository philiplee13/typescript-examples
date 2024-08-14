"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const models = require("../../models/user.models");
const dbconfig = require("../../../config/db");
const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
    const result = await dbconfig.pool.query("SELECT * FROM users.user");
    const users = result.rows;
    for (let i = 0; i < users.length; i++) {
        console.log(`user is ${users[i]}`);
        console.log(users[i] instanceof models.User);
    }
    return res.json(users);
});
exports.default = userRouter;

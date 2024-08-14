"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = require("../../service/user.service");
const user_models_1 = require("../../models/user.models");
const userRouter = (0, express_1.Router)();
userRouter.get("/", async (req, res) => {
    const userList = await user_service_1.userService.getUsers();
    return res.json(userList);
});
userRouter.post("/", async (req, res) => {
    const userToCreate = new user_models_1.User(req.body.userId, req.body.name, req.body.age);
    const createdUser = await user_service_1.userService.addUser(userToCreate);
    return res.json(createdUser);
});
userRouter.delete("/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);
    const deletedUser = user_service_1.userService.deleteUser(userId);
    return res.json(deletedUser);
});
exports.default = userRouter;

import { Request, Response, Router } from "express";
import { userService } from "../../service/user.service";
import { User } from "../../models/user.models";
import { CustomResponse } from "../../models/responses/response.model";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    const userList: CustomResponse = await userService.getUsers();
    return res.json(userList);
});

userRouter.post("/", async (req: Request, res: Response) => {
    const userToCreate: User = new User({
        name: req.body.name,
        age: req.body.age,
    });
    const createdUser: CustomResponse = await userService.addUser(userToCreate);
    return res.json(createdUser);
});

userRouter.delete("/:userId", async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    const deletedUser: CustomResponse = await userService.deleteUser(userId);
    return res.json(deletedUser);
});

export default userRouter;
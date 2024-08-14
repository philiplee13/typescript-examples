import { Request, Response, Router } from "express";
import { userService } from "../../service/user.service";
import { User } from "../../models/user.models";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    const userList: User[] = await userService.getUsers();
    return res.json(userList);
});

userRouter.post("/", async (req: Request, res: Response) => {
    const userToCreate: User = new User(req.body.userId, req.body.name, req.body.age);
    const createdUser: boolean = await userService.addUser(userToCreate);
    return res.json(createdUser);
});

userRouter.delete("/:userId", async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    const deletedUser: boolean = await userService.deleteUser(userId);
    return res.json(deletedUser);
});

export default userRouter;
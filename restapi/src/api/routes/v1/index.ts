import { Router } from "express";
import usersRouter from './user.routes';

const router: Router = Router();
router.use('/users', usersRouter);

export default router;
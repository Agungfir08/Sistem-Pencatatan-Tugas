import Express from "express";
import { register, login } from "../controller/user.controller.js";
import user from "../model/user.model.js";

const userRouter = Express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;

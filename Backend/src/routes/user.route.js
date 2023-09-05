import Express from "express";
import {
  register,
  login,
  logout,
  getUserProfile,
} from "../controller/user.controller.js";
import refreshToken from "../controller/refreshToken.js";
import verifyToken from "../middleware/verifyToken.js";

const userRouter = Express.Router();
userRouter.post("/register", register);
userRouter.delete("/logout", logout);
userRouter.post("/login", login);
userRouter.get("/refreshToken", refreshToken);
userRouter.get("/verifyToken", verifyToken);
userRouter.get("/profile", verifyToken, getUserProfile);

export default userRouter;

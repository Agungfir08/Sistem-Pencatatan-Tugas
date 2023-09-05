import Express from "express";
import {
  createTask,
  deleteTask,
  filterTask,
  getAllTask,
  getTaskNotification,
  updateTask,
} from "../controller/task.controller.js";
import verifyToken from "../middleware/verifyToken.js";
const taskRouter = Express.Router();

taskRouter.get("/task/:user_id", verifyToken, getAllTask);
taskRouter.post("/task", createTask);
taskRouter.put("/task/:id", updateTask);
taskRouter.delete("/task/:id/delete", deleteTask);
taskRouter.get("/task/notification", getTaskNotification);
taskRouter.get("/task/filter", filterTask);

export default taskRouter;

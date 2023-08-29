import  Express  from "express";
import { createTask, getAllTask } from "../controller/task.controller.js";
const taskRouter = Express.Router()

taskRouter.get('/task', getAllTask)
taskRouter.post('/task', createTask)

export default taskRouter
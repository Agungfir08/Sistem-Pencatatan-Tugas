import  Express  from "express";
import { createTask, deleteTask, getAllTask, updateTask } from "../controller/task.controller.js";
const taskRouter = Express.Router()

taskRouter.get('/task', getAllTask)
taskRouter.post('/task', createTask)
taskRouter.put('/task/:id', updateTask)
taskRouter.delete('/task/:id/delete', deleteTask)

export default taskRouter
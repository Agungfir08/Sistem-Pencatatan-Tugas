import Express from "express";
import taskRouter from "./src/routes/task.route.js";
import userRouter from "./src/routes/user.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = Express();
app.use(Express.json());
app.use(cookieParser());
// app.use(dot);

app.get("/", (req, res) => {
  res.json("haloooo");
});
app.use(taskRouter);
app.use(userRouter);

app.listen(4000, () => {
  console.log("connected to server");
});

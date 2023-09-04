import Express  from 'express';
import taskRouter from './src/routes/task.route.js';

const app = Express();
app.use(Express.json())

app.get('/',(req,res)=>{
  res.json('haloooo')
})
app.use(taskRouter)

app.listen(4000, ()=>{
  console.log('connected to server')
})

import Express from "express";

const app = Express();
const port = 5000;

app.listen(port, () => {
  console.log(`your App Running in port : ${port}`);
});

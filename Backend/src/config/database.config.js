import Sequelize from "sequelize";

const database = new Sequelize("task_list", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  database.authenticate();
  console.log("db is connected");
} catch (err) {
  console.log(err.message);
}

export default database;

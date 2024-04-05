import express from "express";
import bodyParser from "body-parser";
import { Sequelize } from "sequelize";
import transactionRoutes from "./routes/transactions";

const app = express();
const port = 3000;

app.use(bodyParser.json());

const sequelize = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USERNAME}`,
  `${process.env.DATABASE_PASSWORD}`,
  {
    host: "db",
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use("/transactions", transactionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

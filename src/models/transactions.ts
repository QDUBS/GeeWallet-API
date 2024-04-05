import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USERNAME}`,
  `${process.env.DATABASE_PASSWORD}`,
  {
    host: "db",
    dialect: "postgres",
  }
);

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  category: {
    type: DataTypes.STRING,
  },
});

Transaction.sync({ alter: true });

export default Transaction;

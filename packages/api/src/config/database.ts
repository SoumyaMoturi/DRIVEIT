import { Sequelize } from "sequelize-typescript";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [path.join(__dirname, "../models")],
  logging: false,
});

export default sequelize;

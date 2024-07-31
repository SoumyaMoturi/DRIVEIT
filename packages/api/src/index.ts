require("dotenv").config();
import express, { Request, Response } from "express";
import router from "./routes";
import cors from "cors";
import database from "./config/database";

const passport = require("passport");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 8080;

require("./config/passport");

app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors({ origin: "*" }));
app.use("/auth", router);

app.use(express.static(__dirname + "/../ui/build"));

// database
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing database:", error);
//   });

app
  .listen(port, () => {
    console.log(`> Server Ready on localhost:${port}`);
  })
  .on("error", (err) => {
    console.log(err);
    throw err;
  });

module.exports = app;

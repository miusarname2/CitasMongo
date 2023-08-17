import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { appToken } from "../middlewares/token.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import "reflect-metadata";

const app = express();

//setting
dotenv.config();
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

//Routes
app.get('/token/:usuario',appToken)

//Server
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
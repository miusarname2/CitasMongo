import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { appToken } from "../middlewares/token.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { counsultingRoom } from "../routes/counsultingRoom.routes.js";
import { users } from "../routes/users.routes.js";
import { appVerify } from "../middlewares/token.js";
import { doctors } from "../routes/doctors.routes.js";
import "reflect-metadata";
import { permisionValidator } from "../middlewares/config/permisions.js";

const app = express();

//setting
dotenv.config();
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

//Routes
app.get("/token", appToken);
app.use("/users", appVerify, permisionValidator, users);
app.use("/doctors", appVerify, permisionValidator, doctors)
app.use("/quotes", appVerify, permisionValidator);
app.use("/counsultingRoom", appVerify, permisionValidator,counsultingRoom)

//Server
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});

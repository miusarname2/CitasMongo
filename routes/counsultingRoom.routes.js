import { Router } from "express";
import { con } from "../Database/connection/atlas.js";

export const counsultingRoom = Router();

counsultingRoom.get("/", async (req, res) => {
  const db = await con();
  const usuario = db.collection("doctors");
  const result = await usuario.find().toArray();
  res.send(result);
});

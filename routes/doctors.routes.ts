import { Router } from "express";
import { con } from "../Database/connection/atlas.js";

export const doctors = Router();

doctors.get("/", async (req: any, res) => {
  const db = await con();
  const speciality = (req.query.speciality).toLowerCase();
  const usuario = db.collection("doctors")
  const result = await usuario
    .find({ speciality })
    .project({ consultingRoom: 0 })
    .toArray();
  res.send(result);
});

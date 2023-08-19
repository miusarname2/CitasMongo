import { Router } from "express";
import { con } from "../Database/connection/atlas.js";

const users = Router();

users.get("/", async (req, res) => {
  const db = await con();
  const usuario = db.collection("users");
  const result = await usuario.find().project({ attendant: 0, quotes: 0 }).sort({ "names.name": 1 }).toArray();
  res.send(result);
});

users.get("/doctor/:id", async (req, res) => {
  try {
    const db = await con();
    const usuario = db.collection("users");
    
    const result = await usuario.aggregate([
      {
        $match: { _id: req.params.id },
      },
      {
        $project: {
          _id: 0,
          quotes: {
            $filter: {
              input: "$quotes",
              as: "quote",
              cond: { $eq: ["$$quote.code", 1] },
            },
          },
        },
      },
      { $unwind: "$quotes" },
    ]).toArray();

    if (result.length === 0) {
      return res.json({ msg: "no tiene citas proximas" });
    }

    return res.json(result);
  } catch (error) {
    res.send(":(");
  }
});

users.post("/", async (req, res) => {
  try {
    const db = await con();
    const usuario = db.collection("users");
    await usuario.insertOne(req.body);
    res.json({ msg: "Creado correctamente" });
  } catch (error) {
    res.send(":(");
  }
});

export { users };

import { Router } from "express";
import { con } from "../Database/connection/atlas.js";

export const quotes = Router();

quotes.get("/next/:id", async (req, res) => {
  const db = await con();
  const usuario = db.collection("users");
  const result = await usuario
    .aggregate([
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
    ])
    .toArray();

  if (result.length == 0) return res.json({ msg: "no tiene citas proximas" });

  return res.json(result);
});

quotes.get("/specify", async (req, res) => {
  const db = await con();
  const usuario = db.collection("users");
  const result = await usuario.find().toArray();

  res.send(result);
});

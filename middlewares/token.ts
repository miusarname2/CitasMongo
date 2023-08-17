import { SignJWT, jwtVerify } from "jose";
import { con } from "../Database/connection/atlas.js";
import passport from "passport";
import { ObjectId } from "mongodb";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import dotenv from "dotenv";
import { Router } from "express";

dotenv.config({ path: "../" });

const appToken = Router();
const appVerify = Router();

appToken.use(passport.initialize());

const crearToken = async (req, res) => {
  const encoder = new TextEncoder();
  const jwtConstructor = await new SignJWT(req.body)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_SECRET));
  res.send(jwtConstructor);
};

//validate token
export const validarToken = async (token) => {
  const conexionDB = await con();
  try {
    const encoder = new TextEncoder();
    const jwtData: any = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    return await jwtData.payload;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//passport
passport.use(
  new BearerStrategy(async function (token, done) {
    const usuario = await validarToken(token);
    if (!usuario) return done(null, false);
    return done(null, usuario);
  })
);

appToken.use(crearToken);

export { appToken, appVerify };

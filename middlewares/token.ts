import { SignJWT, jwtVerify } from "jose"
import { con } from "../Database/connection/atlas.js";
import passport from "passport";
import { ObjectId } from "mongodb";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config({ path: "../" });

const appToken = Router();
const appVerify = Router();

appToken.use(passport.initialize());

const crearToken = async (req, res) => {
    const conexionDB = await con()
    const encoder = new TextEncoder();

    let db = await con();
    let usuario = db.collection("usuarios");
    let result = await usuario.find({}).toArray();

    // Busca el parámetro ``usuario`` en la colección "usuarios"
   
    if (!result) return res.status(404).send('Usuario no encontrado');
    const id = result._id.toString();

    // Crear el token con el id del documento buscado
    const jwtConstructor = await new SignJWT({ id: id })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    res.send(jwtConstructor);
}

const validarToken = async (token) => {
    const conexionDB = await con()
    try {
        const encoder = new TextEncoder();
        const jwtData: any = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );

        // Buscar el id del token en la colección token
        /*
        Si el token es válido, se retorna el documento de la colección token
        Si el token es válido, pero no existe en la colección token, se retorna null
        Si el token no es válido, se retorna false
        */
        return await conexionDB.collection('usuarios').findOne({ _id: new ObjectId(jwtData.payload.id) });
    } catch (error) {
        console.log(error);
        return false;
    }

}

passport.use(new BearerStrategy(
    async function (token, done) {
        const usuario = await validarToken(token)
        if (!usuario) return done(null, false); // No se encontró el token en la colección token o el token no es válido
        return done(null, usuario); // El token es válido y se agrega el documento de la colección token a req.user
    }
));

const rolesPermitidos = {
    admin: ['admin', 'users','doctors','quotes'],
    users: ['doctors','quotes'],
    doctors:['quotes','users']
}
export const validarPermisos = (req, res, next) => {
    //Comprueba que el usuario este accediendo a la url permitida para su rol
    if (rolesPermitidos[req.user.rol].includes(req.url.split('/')[2])) {
      next();
    } else {
      res.status(403).send('No tienes permisos para acceder a este recurso');
    }
  }

appToken.use(crearToken)
appVerify.use(validarToken)


export {
    appToken,
    appVerify
};
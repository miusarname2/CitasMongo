# CitasMongo

Este es un repositorio de código para un proyecto de citas que utiliza MongoDB como base de datos. El proyecto está escrito en Python y utiliza la biblioteca Flask para crear una aplicación web.

## Características

El proyecto tiene las siguientes características:

- Los usuarios pueden crear perfiles y buscar otros usuarios.
- Los usuarios pueden enviar mensajes a otros usuarios.
- Los usuarios pueden ver su historial de chat.
- Los usuarios pueden marcar a otros usuarios como favoritos.
- Los usuarios pueden bloquear a otros usuarios.

## Instalacion

1. primero clona el repositorio

```bash
git clone https://github.com/miusarname/CitasMongo
```

2. luego ingresa a la carpeta en donde esta el repositorio

```bash
cd  CitasMongo
```

3. Instala las dependencias

```bash
npm i
```

4. Cambia en .env el string de conexion, la clave privada y el puerto en el cual deseas iniciar el repositorio

### Este es un ejemplo:

```bash
ATLAS_STRCONNECT="mongodb+srv://root:Oscar3004@cluster0.ap9ecpy.mongodb.net/ejercicio-citas"
JWT_PRIVATE_KEY="HolaMundo"
PORT = 3002
```

5. Corre el servidor con

```bash
npm run dev
```

## Modo de uso

1. obtendras un token, para facilidad de ti como usuario te recomiendo el token de admin

podes usar este comando de bash:

```bash
curl -X POST http://localhost:<el_puerto_que_defieniste>/token -H 'Content-Type: application/json' -d '{"role":"admin"}'
```

este es un ejemplo con el puerto por defecto que es el 3000

```bash
curl -X POST http://localhost:3000/token -H 'Content-Type: application/json' -d '{"role":"admin"}'
```

o hacer un consulta con thunderclient con las siguientes caracteristicas

el link es:

```bash
http://localhost:<el_puerto_que_defieniste>/token
```

y en los headers pon :

```bash
Content-Type: application/json
```

y en el body pon :

```js
{"role":"admin"}
```

y ahora tienes acceso a todas las rutas

**Nota**:tambien existe el token para users y para doctor, pero eso de momento no te interesa

### Rutas

Te las dare en diciendo " primero al operacion(o el metodo), luego el "link" "

```bash
GET http://localhost:<el_puerto_que_defieniste>/users/
```

```bash
GET http://localhost:<el_puerto_que_defieniste>/doctor/:<id_del_doctor>
```

```bash
POST http://localhost:<el_puerto_que_defieniste>/users/
```

```bash
GET http://localhost:<el_puerto_que_defieniste>/doctors/
```

```bash
GET http://localhost:<el_puerto_que_defieniste>/quotes/specify
```

```bash
GET http://localhost:<el_puerto_que_defieniste>/quotes/next/:id
```

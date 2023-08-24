# CitasMongo Version dificil de leer(Baja y veras 2 versiones más faciles de leer)

Este es un repositorio de código para un proyecto de citas que utiliza MongoDB como base de datos. El proyecto está escrito en nodeJS y express
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

# API de CitasMongo - Documentación

La API de CitasMongo es un servicio backend diseñado para gestionar citas médicas y datos de usuarios para una clínica médica. Proporciona puntos finales para interactuar con cuentas de usuario, información de médicos, citas y más. A continuación, se presenta un resumen de sus características, instrucciones de instalación, uso de tokens y puntos finales de la API.

## Características

- **Autenticación Basada en Tokens:** Se utiliza JSON Web Tokens (JWT) para autenticar usuarios y permitir acceso seguro a rutas protegidas.

- **Límite de Solicitudes:** Se implementa un mecanismo de límite de solicitudes para prevenir abusos y mantener la integridad del servicio.

- **Rutas para Diferentes Roles:** Hay rutas específicas para Camper y Trainer, cada uno con diferentes acciones y permisos.

- **Gestión de Citas:** Los usuarios pueden obtener citas futuras y detalles específicos de citas.

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/miusarname/CitasMongo.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd CitasMongo
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Crea un archivo `.env` en el directorio raíz con la siguiente información:
   ```
   ATLAS_STRCONNECT="mongodb+srv://usuario:contraseña@cluster0.mongodb.net/ejercicio-citas"
   JWT_PRIVATE_KEY="TuClaveSecreta"
   PORT=3000
   ```

5. Inicia el servidor:
   ```
   npm run dev
   ```

## Uso de Tokens

Para acceder a rutas protegidas, necesitas obtener un token de autenticación. Aquí te explicamos cómo generar y usar tokens:

1. **Generar Token:** Realiza una solicitud `POST` a `/token` sin cuerpo. Esto devolverá un token de autenticación.

2. **Incluir Token:** Incluye el token en la cabecera `Authorization` de tus solicitudes usando el formato: `Bearer TU_TOKEN`.

## Puntos Finales de la API

### Usuarios

- `GET /users`: Obtiene una lista de usuarios. (Solo para Admin)
- `GET /users/doctor/:id`: Obtiene citas para un usuario específico que también es doctor.
- `POST /users`: Crea una nueva cuenta de usuario.

### Médicos

- `GET /doctors`: Obtiene una lista de médicos. (Solo para Admin)

### Citas

- `GET /quotes/next/:id`: Obtiene citas futuras para un usuario específico.
- `GET /quotes/specify`: Obtiene detalles de citas para todos los usuarios.

### Salas de Consulta

- `GET /counsultingRoom`: Obtiene una lista de salas de consulta. (Solo para Admin)

## Cuerpo de las Solicitudes

Cuando envíes datos en el cuerpo de la solicitud (por ejemplo, para crear un nuevo usuario), asegúrate de que el cuerpo contenga las propiedades necesarias según los requisitos del punto final. Por ejemplo:

```json
{
  "names": {
    "first": "John",
    "last": "Doe"
  },
  "phone": "123456789",
  "address": "123 Main St",
  "email": "john@example.com",
  "genre": "male",
  "attendant": {},
  "quotes": {}
}
```

# Version divertida

# 🏥 API de CitasMongo - ¡Bienvenido al Hospital Virtual! 🩺

¡Hola y bienvenido al emocionante mundo de la API de CitasMongo! 🚀 Aquí podrás gestionar tus citas médicas y acceder a datos de usuarios de manera rápida y segura. ¿Estás listo para explorar? 🌟

## 📋 Características Increíbles

- **Autenticación de Superhéroes:** Usamos JSON Web Tokens (JWT) para garantizar la seguridad y autenticación de tus hazañas médicas.

- **¡Alto al Spam!:** Hemos conjurado un poderoso escudo anti-spam para que solo las solicitudes legítimas lleguen a nuestro reino.

- **Rutas Personalizadas:** Cada tipo de usuario tiene su propio camino en esta aventura médica.

- **Control de Citas:** Consulta tus futuras misiones médicas y detalles con facilidad.

## 🚀 Instalación Mágica

1. 🧙‍♂️ Clona el pergamino mágico:
   ```
   git clone https://github.com/miusarname/CitasMongo.git
   ```

2. 🏰 Ingresa al castillo encantado:
   ```
   cd CitasMongo
   ```

3. ✨ Invoca los ingredientes mágicos:
   ```
   npm install
   ```

4. 🧪 Crea un hechizo `.env` en la raíz con estos secretos:
   ```
   ATLAS_STRCONNECT="mongodb+srv://usuario:contraseña@cluster0.mongodb.net/ejercicio-citas"
   JWT_PRIVATE_KEY="TuClaveSecreta"
   PORT=3000
   ```

5. 🪄 Lanza tu varita mágica:
   ```
   npm run dev
   ```

## 🧙‍♀️ Uso de Pergaminos (Tokens)

Para acceder a los secretos del reino, necesitarás un pergamino mágico. Así es como puedes obtenerlo:

1. 📜 Conjura tu pergamino: Realiza una solicitud `POST` a `/token` sin mensaje. Obtendrás un pergamino con tu nombre.

2. 🎩 ¡Usa tu pergamino!: Incluye tu pergamino en la cabecera `Authorization` de tus solicitudes usando el formato: `Bearer TU_PERGAMINO`.

## 🗺️ Mapa Mágico de Rutas

### Ciudadanos

- `GET /citizens`: Consulta la lista de ciudadanos. (Solo para Administradores)
- `GET /citizens/doctor/:id`: Explora las misiones médicas de un ciudadano que también es doctor.
- `POST /citizens`: ¡Crea un nuevo ciudadano en nuestro reino!

### Curanderos

- `GET /healers`: Busca en la guía de curanderos. (Solo para Administradores)

### Misiones Médicas

- `GET /quests/next/:id`: Encuentra tus futuras misiones médicas. 🚑
- `GET /quests/details`: Detalles de misiones para todos los aventureros.

### Salas de Hechicería

- `GET /magicRooms`: Explora las salas de hechicería. (Solo para Administradores)

## 📜 Invocando a las Peticiones

Cuando envíes tu mensaje mágico (por ejemplo, para crear un nuevo ciudadano), asegúrate de incluir todos los elementos necesarios para realizar el hechizo correctamente. Por ejemplo:

```json
{
  "names": {
    "first": "John",
    "last": "Doe"
  },
  "phone": "123456789",
  "address": "123 Main St",
  "email": "john@example.com",
  "genre": "male",
  "attendant": {},
  "quests": {}
}
```

## 📚 Último Conjuro

La API de CitasMongo es como un libro de conjuros para gestionar tus citas y datos de usuarios en un hospital virtual. ¡No dudes en explorar y usar tu magia para mejorar la experiencia de la salud en línea! 🌈🔮
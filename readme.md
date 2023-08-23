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


Lo demás lo iras descubriendo tu mismo al leer el codigo :)

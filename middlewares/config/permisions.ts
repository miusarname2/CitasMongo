import { validarToken } from "../token.js";

export const permisionValidator = async (req, res, next) => {
  req.data = await validarToken(req.headers.authorization);
  const regex = /\/users\/doctor\/.*/;
  const quotesRegex = /\/quotes\/.*/;
  console.log(req.data.role);

  if (req.data.role === "admin") {
    next();
  } else if (
    (req.data.role == "user" &&
      (req.originalUrl == "/users" ||
        req.originalUrl.startsWith("/users/doctor/"))) ||
    regex.test(req.originalUrl) ||
    quotesRegex.test(req.originalUrl)
  ) {
    console.log("paso");
    console.log("paso");
    next();
  } else if (
    req.data.role == "doctor" &&
    (req.originalUrl == "/doctors" || quotesRegex.test(req.originalUrl))
  ) {
    console.log("paso");
    next();
  }
};

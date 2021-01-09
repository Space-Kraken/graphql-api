import { server } from "./server.js";
import "./db.js";

// Se inicia la instancia del servidor creado en server.js
// el puero usado es 3100 para deployment en heroku use:
//                process.env.port

server.start({ port: 3100 }, ({ port }) => {
  console.log("Server running in port:", port);
});

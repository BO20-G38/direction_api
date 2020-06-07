import express from "express";
import router from "./app/router";
import { createUploadDirIfNotPresent } from "./app/upload";
import socketServer, { handleSocketConnection } from "./app/socket";

createUploadDirIfNotPresent();

const app = express();
const { server, io } = socketServer(app);

handleSocketConnection(io);
app.use(router);

const SERVER_PORT = 3000;
server.listen(SERVER_PORT, () =>
  console.log(`API running on port ${SERVER_PORT}`)
);

import express from "express";
import router from "./app/router";
import socketServer from "./app/socket";

const SERVER_PORT = 3000;

const app = express();
const server = socketServer(app);
app.use(router);

server.listen(3000, () => console.log(`API running on port ${SERVER_PORT}`));

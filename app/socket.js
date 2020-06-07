import http from "http";
import socket from "socket.io";
import { movePy } from "./pySpawn";

const socketServer = app => {
  const server = http.createServer(app);
  const io = socket(server);

  handleConnection(io);
  return server;
};

export const handleConnection = socket => {
  socket.on("connection", client => {
    client.on("prediction", direction => movePy(direction));
  });
};

export default socketServer;

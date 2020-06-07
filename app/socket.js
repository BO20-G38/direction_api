import http from "http";
import socket from "socket.io";

const pool = {
  channel: "prediction",
  client: null
};

// wraps a HTTP server with a socket.io instance
const socketServer = app => {
  const server = http.createServer(app);
  const io = socket(server);

  return { server, io };
};

// ensure connection of clients are attatched to pool
export const handleSocketConnection = socket => {
  socket.on("connection", client => (pool.client = client));
};

// on image upload to "/" route, emit to connected
// client that a new prediction can be ran on new image
export const emitClient = () => {
  const { client, channel } = pool;
  client.emit(channel, true);
};

export default socketServer;

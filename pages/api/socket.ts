import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("new-bid", (bid) => {
        console.log("got a new bid, emitting update", bid);
        socket.broadcast.emit("update-highest-bid", bid);
      });
    });
  }
  res.end();
};

export default SocketHandler;

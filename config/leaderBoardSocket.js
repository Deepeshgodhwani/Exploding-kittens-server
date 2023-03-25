module.exports.leaderboardSocket = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  //setup socket connection //
 
  io.on("connection", (socket) => {

    // updating leaderboard //
    socket.on("updateLeaderBoard", () => {
      io.sockets.emit("sendUsers");
    });

    socket.on("disconnect", () => {
    });
  });
};

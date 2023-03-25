module.exports.leaderboardSocket = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  //setup socket connection //
 
  io.on("connection", (socket) => {
    console.log("connected to socket.io");
      
    // updating leaderboard //
    socket.on("updateLeaderBoard", () => {
      console.log("emit triggers");
      socket.emit("sendUsers");
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });
  });
};

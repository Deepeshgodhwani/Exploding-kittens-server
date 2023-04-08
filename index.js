const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const connectDb = require("./config/mongoose");
const bodyParser=require('body-parser');
const app = express();
const PORT = process.env.PORT;

//connecting database
connectDb();

app.use(bodyParser.json());
app.use(cors());

//user api
app.use("/api/users", userRouter);

app.all("*", (req, res) => {
  
   res.status(404).send("404 NOT FOUND");
   
});



// enabling socket server // -------
const socketServer = require("http").Server(app);
const socket = require("./config/leaderBoardSocket").leaderboardSocket(
  socketServer
);

socketServer.listen(4000, (err) => {
  if (err) {
    ("error in listening socket server");
  } else {
    console.log("socket server is running successfully on port : 4000");
  }
});

app.listen(PORT, () => {
  console.log(`Exploding kitten API Server is running on ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  process.exit(1);
});
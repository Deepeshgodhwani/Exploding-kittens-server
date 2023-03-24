const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter=require('./routes/user');
const connectDb = require("./config/mongoose");


const app = express();
const PORT = 8000;

connectDb()
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Exploding kitten API Server!");
});

app.listen(PORT, () => {
  console.log(`Exploding kitten API Server is running on ${PORT}`);
});




// app.all("*", (req, res) => {
//   sendErrorProd(
//     new AppError(`Can't find ${req.originalUrl} on this server!`, 404),
//     res
//   );
// });

// process.on("unhandledRejection", (err) => {
//   console.log(err.name, err.message);
//   console.log("UNHANDLED REJECTION! Shutting down...");
//   process.exit(1);
// });

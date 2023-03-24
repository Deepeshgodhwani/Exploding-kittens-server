const express = require("express");

const UserModel = require("../models/user");

// IMPORT OF ROUTER TO ALL RESOURCES

const router = express.Router();

router.get("/fetchUsers", async (req, res) => {
  try {
    let users = await UserModel.find();
    return res.send({
      status: "success",
      message: "List of all users",
      data: users,
    });
  } catch (error) {
    console.error("error in fetching users", error.message);
    res
      .status(400)
      .send({ status: "failure", message: "Internal Server Error" });
  }
});



router.post("/createUser", async (req, res) => {
  try {
      console.log(req.body.username)
    let user =await UserModel.findOne({ username: req.body.username });
    if (user) {
      return res.send({
        status: "success",
        message: "user is already exists",
        data: user,
      });
    }

    let newUser = await UserModel.create({
       username:req.body.username
    });
    return res.send({
      status: "success",
      message: "username is created ",
      data: newUser,
    });
  } catch (error) {
    console.error("error in creating user", error.message);
    res
      .status(400)
      .send({ status: "failure", message: "Internal Server Error" });
  }
});



router.get('/getUser/:username',async (req,res)=>{

  try {
     let user =await UserModel.findOne({ username: req.params.username });
    
      return res.send({
        status: "success",
        message: "user data ",
        data: user,
      });
    } catch (error) {
      console.error("error in getting userDetails", error.message);
      res
        .status(400)
        .send({ status: "failure", message: "Internal Server Error" });
     }
  
}) 



router.put("/updateUser", async (req, res) => {
  try {
    console.log(req.body)
    let user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      return res.send({ status: "failure", message: "user is not exist" });
    }

    let newMatchesWon=parseInt(req.body.matchesWon)
  
    user.matchesWon += newMatchesWon;
    user.save();
    return res.send({
      status: "success",
      message: "user is updated ",
      data: user,
    });
  } catch (error) {
    console.error("error in updating user", error.message);
    res
      .status(400)
      .send({ status: "failure", message: "Internal Server Error" });
  }
});

module.exports = router;

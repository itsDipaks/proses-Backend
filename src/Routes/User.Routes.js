const {Router} = require("express");
const {UserModel} = require("../Models/User.model");
const UserRouter = Router();

UserRouter.post("/", async (req, res) => {
  const {username, email} = req.body;
  const isuser = await UserModel.findOne({email});
  if (!isuser) {
    try {
      const Adduser = new UserModel(req.body);
      await Adduser.save();
      res.status(201).send({msg: "User Created"});
    } catch (err) {
      res.status(200).send({msg: "error"});
    }
  } else {
    res.status(200).send({msg: "User Exist"});
  }
});

UserRouter.get("/", async (req, res) => {
  try {
    const AllUsers = await UserModel.find();
    res.status(201).send({msg: "User Data", AllUsers: AllUsers});
  } catch (err) {
    res.status(200).send({msg: "Data Not Found", err: err});
  }
});
UserRouter.get("/:id", async (req, res) => {
  try {
    const User = await UserModel.findOne({_id: req.params.id});
    res.status(201).send({msg: "User Data", User: User});
  } catch (err) {
    res.status(200).send({msg: "Data Not Found", err: err});
  }
});

UserRouter.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true}
    );
    res.status(200).send({msg: "User Updated", user: updatedUser});
  } catch (err) {
    res.status(500).send({msg: "Error updating user", error: err});
  }
});

UserRouter.delete("/:id", async (req, res) => {
  try {
    const User = await UserModel.findOneAndDelete({_id: req.params.id});
    if (!User) {
      return res.status(404).json({error: "User not found"});
    }
    res.send({msg: "User deleted successfully"});
  } catch (error) {
    res.status(500).json({error: "Error deleting User"});
  }
});
module.exports = {UserRouter};

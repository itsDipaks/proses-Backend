const express = require("express");
const {Connect} = require("./src/Config/db");
const {UserRouter} = require("./src/Routes/User.Routes");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
app.use("/user", UserRouter);

app.listen(8400, async () => {
  try {
    console.log("Server started");
    await Connect;
    console.log("Connected To DB");
  } catch (err) {
    console.log(err);
  }
});

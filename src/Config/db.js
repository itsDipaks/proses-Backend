const mongoose = require("mongoose");

const Connect = mongoose.connect(
  "mongodb://itsdipakpawar4206:processtech@ac-nkgtjqx-shard-00-00.zsrxzbf.mongodb.net:27017,ac-nkgtjqx-shard-00-01.zsrxzbf.mongodb.net:27017,ac-nkgtjqx-shard-00-02.zsrxzbf.mongodb.net:27017/?ssl=true&replicaSet=atlas-vx1511-shard-0&authSource=admin&retryWrites=true&w=majority"
);
module.exports = {Connect};

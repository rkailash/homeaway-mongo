const mongoose = require("mongose");

const mongoDB = "mongodb://kailashr:passw0rd1@ds237855.mlab.com:37855/homeaway";

mongoose.connect(mongoDB);

mongoose.Promise = global.promise;

const db = mongoose.connection();

db.on("error", console.error.bind(console, "MongoDB connection error:"));

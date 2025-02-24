require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Catering = require("../models/catering.js");

main().then(() => {
    console.log("connection successfull");
})
.catch((e) => {
    console.log(e);
})

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

const initDB = async () => {
    await Catering.deleteMany({});
    await Catering.insertMany(initData.data);
    console.log("data was initlized");
}

initDB();